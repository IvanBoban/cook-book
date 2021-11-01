import useAddRecipePageFrom from "./useAddRecipePageForm";
import "./AddRecipePage.css";
export default function AddRecipePage() {
  const {
    isLoading,
    formik,
    addIngredient,
    removeIngredient,
    addPreparationStep,
    removePreparationStep,
  } = useAddRecipePageFrom();

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <main>
      <form onSubmit={formik.handleSubmit}>
        <fieldset disabled={isLoading}>
          <label htmlFor="name">Recipe name </label>
          <input type="text" {...formik.getFieldProps("name")} />

          <label htmlFor="cookingTime"> Cooking time </label>
          <input type="number" {...formik.getFieldProps("cookingTime")} />
          <label htmlFor="numberOfServings">Number of servings </label>
          <input type="number" {...formik.getFieldProps("numberOfServings")} />

          <section>
            <h3>Ingredients </h3>
            {formik.values.ingredients.map((_, index) => (
              <>
                <input
                  type="text"
                  {...formik.getFieldProps(`ingredients[${index}].name`)}
                />

                <input
                  type="number"
                  {...formik.getFieldProps(`ingredients[${index}].quantity`)}
                />

                <button
                  type="button"
                  data-index={index}
                  onClick={removeIngredient}
                >
                  Remove ingredient
                </button>
              </>
            ))}
            <button type="button" onClick={addIngredient}>
              Add ingredient
            </button>
          </section>
          <section>
            <h3>Preperation steps</h3>
            {formik.values.preparationSteps.map((_, index) => (
              <>
                <input
                  type="text"
                  {...formik.getFieldProps(`preparationSteps[${index}]`)}
                />

                <button
                  type="button"
                  data-index={index}
                  onClick={removePreparationStep}
                >
                  Remove preparation steps
                </button>
              </>
            ))}

            <button type="button" onClick={addPreparationStep}>
              Add preparation step
            </button>
          </section>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </main>
  );
}
