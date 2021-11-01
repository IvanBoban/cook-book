import useLoading from "../../../hooks/useLoading";
import Recipe from "../../../model/Recipe";
import APIService from "../../../services/apiService";

export default function useRateRecipe(recipeData: Recipe) {
  const [isLoading, { enableLoading, disableLoading }] = useLoading(false);

  async function rateRecipe() {
    enableLoading();
    const apiService = new APIService();
    try {
      const response = await apiService.rateRecipe(recipeData.id, [
        ...recipeData.ratings,
        4,
      ]);
      if (response.status === 200) {
        disableLoading();
        return;
      }
      disableLoading();
    } catch (error) {
      alert("error");
    }
  }
  return { isLoading, recipeData, rateRecipe };
}
