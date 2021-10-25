import Ingredient from "./Ingredient";

export default interface CreateRecipeDTO {
  name: string;
  ingredients?: [Ingredient];
  numberOfServings: number;
  cookingTime: number;
  preparationSteps: [string];
}
