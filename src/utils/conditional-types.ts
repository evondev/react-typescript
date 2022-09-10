// Ternary operator
// condition ? true : condition2 ? true : condition3 ? true : condition4 ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;
type someValue = someType<number>; // number
type someValue2 = someType<string>; // string;
type someValue3 = someType<boolean>; // boolean

type MyExclude<T, U> = T extends U ? never : T;
// never: never occurs
type TExclude = Exclude<"a" | "b" | "c", "a">;
// union type: T "a" | "b" | "c"
// U "a"
// "a" extends "a" ? never : "a" => never
// "b" extends "a" ? never : "b" => "b"
// "c" extends "a" ? never : "c" => "c"
// result: "b" | "c"
type MyExtract<T, U> = T extends U ? T : never;
type TExtract = MyExtract<"a" | "b" | "c", "a" | "c">;
// "a" extends "a" ? "a" : never => "a"
// "b" extends "a" ? "b" : never => never
// "c" extends "a" ? "c" : never => never
// result: "a" | "c"

type MyInfer<T> = T extends infer R ? R : any;
type UseMyInfer1 = MyInfer<string>;
type UseMyInfer2 = MyInfer<boolean>;
type UseMyInfer3 = MyInfer<{
  age: number;
}>;
type OptionsFlags2<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type];
interface MyStudent {
  name: string;
  age: number;
  updateName(): void;
  updateAge(): void;
}
type MyStudentConditional = OptionsFlags2<MyStudent>;
// type MyStudentConditional = 'updateName'
type MyNonNullable<T> = T extends null | undefined ? never : T;
type NonNullVal = MyNonNullable<null | undefined | string>;
type UseParameters = Parameters<(a: number, b: number) => {}>;
// function fnName(1,2,3,4,5) ...args console log args
// [1,2,3,4,5]
