import Ingredient from "./Ingredient";

export default interface UpdateRecipeDTO {
  name?: string;
  ingredients?: [Ingredient];
  numberOfServings?: number;
  cookingTime?: number;
  preparationSteps?: [string];
}
