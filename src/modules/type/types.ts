export interface VegetableType {
  id: number;
  name: string;
  price: number;
  image?: string;
  // category?: string;
  // amount?: number;
}
export interface CartVegetableType extends VegetableType {
  // item: VegetableType;
  amount: number;
}
