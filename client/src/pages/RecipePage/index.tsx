import React from "react";
import useFetchRecipe from "../../hooks/useFetchRecipe";

export default function RecipePage() {
  const { isLoading, recipeData } = useFetchRecipe();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>Recipe page</div>;
}
