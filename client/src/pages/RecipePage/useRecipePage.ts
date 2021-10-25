import React from "react";
import { useHistory, useParams } from "react-router";
import Recipe from "../../model/Recipe";
import { ERROR_PAGE } from "../../router/constants";
import APIService from "../../services/apiService";

export default function useRecipePage(disableLoading: () => void) {
  const [recipe, setRecipe] = React.useState<Recipe | null>(null);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const fetchRecipe = React.useCallback(async () => {
    const apiService = new APIService();

    try {
      const response = await apiService.getSingleRecipe(parseInt(id));
      if (response.data) {
        setRecipe(response.data as Recipe);
        disableLoading();
        return;
      }
      history.push(ERROR_PAGE);
    } catch (error) {
      history.push(ERROR_PAGE);
    }
  }, [disableLoading, history, id]);

  React.useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);

  return { recipe };
}
