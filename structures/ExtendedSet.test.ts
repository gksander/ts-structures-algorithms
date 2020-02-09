import { ExtendedSet } from "./ExtendedSet";

let Odds = new ExtendedSet<number>([]);
let Evens = new ExtendedSet<number>([]);
let Primes = new ExtendedSet<number>([]);
let Empty = new ExtendedSet<number>([]);

/**
 * Extended set
 */
describe("ExtendedSet", () => {
  // Setup
  beforeEach(() => {
    Odds = new ExtendedSet<number>([1, 3, 5, 7, 9]);
    Evens = new ExtendedSet<number>([0, 2, 4, 6, 8, 10]);
    Primes = new ExtendedSet<number>([2, 3, 5, 7]);
    Empty = new ExtendedSet<number>([]);
  });

  // Unions
  describe("ExtendedSet#Union", () => {
    test("Odd Union Even", () => {
      const U = ExtendedSet.Union(Odds, Evens);
      expect(Array.from(U).sort()).toEqual(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(),
      );
    });

    test("Even Union Prime", () => {
      const U = ExtendedSet.Union(Evens, Primes);
      expect(Array.from(U).sort()).toEqual([0, 2, 3, 4, 5, 6, 7, 8, 10].sort());
    });

    test("Odds union Empty", () => {
      const U = ExtendedSet.Union(Odds, Empty);
      expect(Array.from(U).sort()).toEqual(Array.from(Odds).sort());
    });
  });

  // Intersection
  describe("ExtendedSet#Intersection", () => {
    test("Even intersect Odd", () => {
      const I = ExtendedSet.Intersection(Evens, Odds);
      expect(Array.from(I)).toEqual([]);
    });

    test("Evens intersect Primes", () => {
      const I = ExtendedSet.Intersection(Evens, Primes);
      expect(Array.from(I).sort()).toEqual([2].sort());
    });

    test("Odds intersect Primes", () => {
      const I = ExtendedSet.Intersection(Odds, Primes);
      expect(Array.from(I).sort()).toEqual([3, 5, 7].sort());
    });

    test("Evens intersect Empty", () => {
      const I = ExtendedSet.Intersection(Evens, Empty);
      expect(Array.from(I).sort()).toEqual([].sort());
    });
  });

  // Difference
  describe("ExtendedSet#Difference", () => {
    test("Evens minus Odds", () => {
      const D = ExtendedSet.Difference(Evens, Odds);
      expect(Array.from(D).sort()).toEqual(Array.from(Evens).sort());
    });

    test("Evens minus Primes", () => {
      const D = ExtendedSet.Difference(Evens, Primes);
      expect(Array.from(D).sort()).toEqual([0, 4, 6, 8, 10].sort());
    });

    test("Primes minus Odds", () => {
      const D = ExtendedSet.Difference(Primes, Odds);
      expect(Array.from(D).sort()).toEqual([2].sort());
    });
  });

  describe("ExtendedSet.hasSubset", () => {
    test("Even does not have Odd subset", () => {
      expect(Evens.hasSubset(Odds)).toBeFalsy();
    });

    test("{1, 3} is a subset of Odds", () => {
      const S = new ExtendedSet<number>([1, 3]);
      expect(Odds.hasSubset(S)).toBeTruthy();
    });
  });
});
