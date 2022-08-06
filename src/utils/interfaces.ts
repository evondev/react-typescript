export interface Product {
  name: string;
  brand: string;
  color: string;
}
// export interface Product {
//   speed?: string;
// }
// merge
export interface ProductNewFeature {
  speed?: "100km/h";
}
export interface ICard {
  title: string;
  description?: string;
  image: string;
  link: string;
}
// union |
// Intersection &
export type FinalProduct = Product & ProductNewFeature;
