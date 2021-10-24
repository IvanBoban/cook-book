import React from "react";
import { useHistory } from "react-router-dom";
import Recipe from "../../model/Recipie";
import { ERROR_PAGE } from "../../router/constants";
import APIService from "../../services/apiService";

export default function useHomePage(disableLoading: () => void) {
  const [recipes, setRecipes] = React.useState<Array<Recipe> | []>([]);
  const history = useHistory();

  const fetchRecipes = React.useCallback(async () => {
    const apiService = new APIService();

    try {
      const response = await apiService.getAllRecipes();
      if (response.data) {
        setRecipes(response.data as [Recipe]);
        disableLoading();
        return;
      }
      history.push(ERROR_PAGE);
    } catch (error) {
      history.push(ERROR_PAGE);
    }
  }, [disableLoading, history]);

  React.useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return { recipes };
}
