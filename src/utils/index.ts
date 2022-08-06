// export function total(a, b) {
//   return a + b;
// }
// total('5', '7'); // 57

import { FinalProduct, Product } from "./interfaces";

// total('5', true); // 57
export function total(a: number, b: number): number {
  return a + b;
  // return a + b;
}
total(5, 7);
// total("5", 9);

/**
 // Tuple
  string[] -> ['evondev', 'react', 'javascript']
  Cú pháp: [number, string]
  Đúng:  [12345, 'evondev']
  Sai: ['evondev', 123]
 *
 */
/**
 * Enum
 * APPROVED
 * PENDING
 * REJECTED
 */
// Any
// Union
/**
 * Literal
 * type Age = 18 | 30 | 40
 */
// Function
// Void
// unknow
// let aNumber: unknown;
// aNumber = 100;
// if (typeof aNumber === "number") {
//   aNumber.toFixed(2);
// }
// const a = 100;
// a.toFixed(2); // 100.00
// never
// contains no values
// represent return type of a function throw error
// function raiseError(err: string): never {
//   throw new Error(err);
// }
// function reject() {
//   return raiseError("error");
// }
// let loop = function forever() {
//   while (true) {
//     console.log("Hello world");
//   }
// };
// let x: never = 10;

const product: FinalProduct = {
  name: "car",
  brand: "bmw",
  color: "red",
};
function addProduct(product: FinalProduct) {
  //
}
addProduct(product);
