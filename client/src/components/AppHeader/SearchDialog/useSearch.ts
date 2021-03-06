import React from "react";
import Recipe from "../../../model/Recipe";
import APIService from "../../../services/apiService";

export default function useSearch() {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  const resetSearch = () => {
    setRecipes([]);
  };

  const searchRecipes = React.useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.currentTarget.value) {
        resetSearch();
        return;
      }

      const apiService = new APIService();

      try {
        const response = await apiService.searchRecipes(
          event.currentTarget.value
        );
        if (response.status) {
          setRecipes(response.data as Recipe[]);
          return;
        }
        alert("error");
      } catch (error) {
        alert("error");
      }
    },
    []
  );

  return { recipes, searchRecipes, resetSearch };
}
