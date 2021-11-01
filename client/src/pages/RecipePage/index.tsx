import React from "react";
import useFetchRecipe from "../../hooks/useFetchRecipe";
import RateRecipe from "./RateRecipe";

export default function RecipePage() {
  const { isLoading, recipeData } = useFetchRecipe();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Recipe data</h1>

      <RateRecipe recipeData={recipeData!} />
    </div>
  );
}
