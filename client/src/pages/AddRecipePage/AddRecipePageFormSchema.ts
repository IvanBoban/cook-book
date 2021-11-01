import * as yup from "yup";

const AddRecipePageFormSchema = yup.object().shape({
  name: yup.string().required(),
  cookingTime: yup.number().positive().required(),
  numberOfServings: yup.number().positive().required(),
  ingredients: yup
    .array()
    .min(1)
    .of(
      yup.object().shape({
        name: yup.string().required(),
        quantity: yup.number().positive().required(),
      })
    ),
  preparationSteps: yup.array().min(1).of(yup.string()),
});

export default AddRecipePageFormSchema;
