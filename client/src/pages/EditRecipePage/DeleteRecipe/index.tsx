import React from "react";
import Recipe from "../../../model/Recipe";
import useDeleteRecipe from "./useDeleteRecipe";

interface DeleteRecipeProps {
  recipeData: Recipe;
}
export default function DeleteRecipe(props: DeleteRecipeProps) {
  const { recipeData } = props;
  const { isLoading, deleteRecipe } = useDeleteRecipe(recipeData);

  if (isLoading) {
    return <div> Loading...</div>;
  }
  return (
    <div>
      <button type="button" onClick={deleteRecipe}>
        Delete recipe
      </button>
    </div>
  );
}
