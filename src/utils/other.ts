// in
// typeof
// keyof
// union: { name: string } | { age: number }
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
  if ("age" in obj) {
    console.log(obj.age);
  }
}
const myStudent = {
  id: 1,
  name: "tuan",
  age: 28,
};
type Student = keyof typeof myStudent;
// "name" | "age" | "id"
