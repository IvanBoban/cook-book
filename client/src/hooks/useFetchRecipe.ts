import React from "react";
import { useParams } from "react-router";
import useLoading from "./useLoading";
import Recipe from "../model/Recipe";
import APIService from "../services/apiService";

export default function useFetchRecipe() {
  const [isLoading, { disableLoading }] = useLoading(true);
  const [recipeData, setRecipeData] = React.useState<Recipe | null>(null);
  const queryParams = useParams<{ id: string }>();

  const fetchRecipe = React.useCallback(async () => {
    const apiService = new APIService();
    try {
      const response = await apiService.getSingleRecipe(
        parseInt(queryParams.id)
      );
      if (response.data) {
        setRecipeData(response.data as Recipe);
        disableLoading();
        return;
      }
      alert("error");
    } catch (error) {
      alert("error");
    }
  }, [disableLoading, queryParams.id]);

  React.useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);
  return { isLoading, recipeData };
}
