import { useFormik } from "formik";
import useLoading from "../../hooks/useLoading";
import CreateRecipeDTO from "../../model/CreateRecipeDTO";
import APIService from "../../services/apiService";
import AddRecipePageFormSchema from "./AddRecipePageFormSchema";
import React from "react";

export default function useAddRecipePageFrom() {
  const [isLoading, { enableLoading, disableLoading }] = useLoading(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      cookingTime: 0,
      numberOfServings: 0,
      ingredients: [{ name: "", quantity: 1 }],
      preparationSteps: [""],
    },
    validationSchema: AddRecipePageFormSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
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

  async function submitForm(values: CreateRecipeDTO) {
    enableLoading();
    const apiService = new APIService();
    try {
      const response = await apiService.createRecipe(values);
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
