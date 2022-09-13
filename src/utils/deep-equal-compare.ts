function deepEqualCompare<T>(
  a: T extends any[] ? "dont pass an array here" : T,
  b: T extends any[] ? "dont pass an array here" : T
): boolean {
  return a === b;
}
// dont pass an array here
deepEqualCompare(true, true);
deepEqualCompare("evondev", "evondev");
deepEqualCompare(99, 99);
// deepEqualCompare([1, 2, 3, 4, 5], [99]);
