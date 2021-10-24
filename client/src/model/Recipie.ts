export default interface Recipe {
  id: number;
  name: string;
  ingredients: [Ingredient];
  ratings: [number];
}

interface Ingredient {
  name: string;
  quantity: number;
}
