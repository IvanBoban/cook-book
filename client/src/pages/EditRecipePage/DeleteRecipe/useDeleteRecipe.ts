import useLoading from "../../../hooks/useLoading";
import Recipe from "../../../model/Recipe";
import APIService from "../../../services/apiService";

export default function useDeleteRecipe(recipeData: Recipe) {
  const [isLoading, { enableLoading, disableLoading }] = useLoading(false);

  async function deleteRecipe() {
    enableLoading();
    const apiService = new APIService();
    try {
      const response = await apiService.deleteRecipe(recipeData.id);
      if (response.status === 200) {
        disableLoading();
        return;
      }

      disableLoading();
    } catch (error) {
      alert("error");
      disableLoading();
    }
  }

  return {
    isLoading,
    deleteRecipe,
  };
}
