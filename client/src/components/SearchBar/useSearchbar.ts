import React from "react";
import { reach } from "yup";
import Recipe from "../../model/Recipe";
import APIService from "../../services/apiService";

export default function useSearchBar() {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  const searchRecipes = React.useCallback(
    async (event: React.FormEvent<HTMLInputElement>) => {
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

  React.useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return { recipes, searchRecipes };
}
