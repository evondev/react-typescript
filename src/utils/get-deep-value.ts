function getDeepValue<T, K extends keyof T, SK extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: SK
) {
  return obj[firstKey][secondKey];
}
// obj[foo] => {a: true, b: 20} => "a" | "b"
const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 30,
  },
};
getDeepValue(obj, "foo", "b");
// nested object
// log(obj, "foo", "a") => true
