import Ingredient from "./Ingredient";

export default interface Recipe {
  id: number;
  name: string;
  cookingTime: number;
  numberOfServings: number;
  ingredients: Ingredient[];
  preparationSteps: string[];
  ratings: number[];
}
