export default interface UpdateRecipeDTO {
  name?: string;
  ingredients?: [Ingredient];
  ratings?: [number];
  numberOfServings?: number;
  cookingTime?: number;
  preparationSteps?: [string];
}

interface Ingredient {
  name: string;
  quantity: number;
}
