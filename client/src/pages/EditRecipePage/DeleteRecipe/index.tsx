import React from "react";
import Recipe from "../../../model/Recipe";
import useDeleteRecipe from "./useDeleteRecipe";

interface DeleteRecipeProps {
  recipeData: Recipe;
}
export default function DeleteRecipe(props: DeleteRecipeProps) {
  const { recipeData } = props;
  const { isLoading, deleteRecipe } = useDeleteRecipe(recipeData);
  return (
    <div>
      <button type="button" onClick={deleteRecipe}>
        Delete recipe
      </button>
    </div>
  );
}
