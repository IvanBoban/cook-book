import Ingredient from "./Ingredient";

export interface CreateRecipeForm {
  name: string;
  ingredients?: Ingredient[];
  numberOfServings: number;
  cookingTime: number;
  preparationSteps: string[];
}

export default interface CreateRecipeDTO extends CreateRecipeForm {
  ratings: [];
}
