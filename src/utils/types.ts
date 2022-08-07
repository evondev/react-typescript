export type Age = 18 | 30 | "40";
// Type assignment
// const variable: dataTypes = value
const age: number = 30;
const name: string = "evondev";
const isStudent: boolean = false;
const school = "Cao Thang";
// Union type typeA | typeB
// Intersection types & typeA & typeB
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentity {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}
type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;
type Other = IContact | IIdentity;
let evondev: Employee = {
  id: 1,
  name: "evondev",
  email: "evondev@gmail.com",
  phone: "123345",
};
let tuan: Customer = {
  name: "tuan",
  credit: 1,
  email: "tuan@gmail.com",
  phone: "99887766",
};
let other: Other = {
  id: 5,
  name: "cba",
};
// Type casting as
// Type assertion as
