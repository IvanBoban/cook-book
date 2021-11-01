import React from "react";
import Recipe from "../../../model/Recipe";
import useRateRecipe from "./useRateRecipe";

interface RateRecipeProps {
  recipeData: Recipe;
}
export default function RateRecipe(props: RateRecipeProps) {
  const { isLoading, recipeData, rateRecipe } = useRateRecipe(props.recipeData);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <button type="button" onClick={rateRecipe}>
      Rate recipe
    </button>
  );
}
