export interface VegetableType {
  id: number;
  name: string;
  price: number;
  image?: string;
}
export interface CartVegetableType extends VegetableType {
  amount: number;
}
