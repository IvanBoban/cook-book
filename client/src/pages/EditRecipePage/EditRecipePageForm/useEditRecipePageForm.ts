import { useFormik } from "formik";
import useLoading from "../../../hooks/useLoading";
import Recipe from "../../../model/Recipe";
import UpdateRecipeDTO from "../../../model/UpdateRecipeDTO";
import APIService from "../../../services/apiService";

export default function useEditRecipePageForm(RecipeData: Recipe) {
  const [isLoading, { disableLoading, enableLoading }] = useLoading(false);

  const formik = useFormik({
    initialValues: {
      name: RecipeData.name,
      cookingTime: RecipeData.cookingTime,
      numberOfServings: RecipeData.numberOfServings,
      ingredients: RecipeData.ingredients,
      preparationSteps: RecipeData.preparationSteps,
    },
    onSubmit: submitForm,
  });

  const addIngredient = () => {
    formik.setFieldValue("ingredients", [
      ...formik.values.ingredients,
      { name: "", quantity: 1 },
    ]);
  };

  const removeIngredient = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (formik.values.ingredients.length === 1) {
      return;
    }
    formik.setFieldValue(
      "ingredients",
      formik.values.ingredients.filter(
        (_, index) => index !== parseInt(event.currentTarget.dataset.index!)
      )
    );
  };

  const addPreparationStep = () => {
    formik.setFieldValue("preparationSteps", [
      ...formik.values.preparationSteps,
      "",
    ]);
  };

  const removePreparationStep = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (formik.values.ingredients.length === 1) {
      return;
    }
    formik.setFieldValue(
      "preparationSteps",
      formik.values.preparationSteps.filter(
        (_, index) => index !== parseInt(event.currentTarget.dataset.index!)
      )
    );
  };

  async function submitForm(values: UpdateRecipeDTO) {
    enableLoading();
    const apiService = new APIService();
    try {
      const response = await apiService.updateRecipe(RecipeData.id, values);
      if (response.status === 201) {
        alert("yaaaay you did it");
        formik.resetForm();
        disableLoading();
        return;
      }
      disableLoading();
      alert("error");
    } catch (error) {
      disableLoading();
      alert("error");
    }
  }

  return {
    isLoading,
    formik,
    addIngredient,
    removeIngredient,
    addPreparationStep,
    removePreparationStep,
  };
}
