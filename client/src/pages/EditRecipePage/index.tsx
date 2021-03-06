import EditRecipePageForm from "./EditRecipePageForm";
import useFetchRecipe from "../../hooks/useFetchRecipe";
import DeleteRecipe from "./DeleteRecipe";

export default function EditRecipePage() {
  const { isLoading, recipeData } = useFetchRecipe();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <main>
      <h3>Edit recipe</h3>
      <EditRecipePageForm recipeData={recipeData!} />
      <DeleteRecipe recipeData={recipeData!} />
    </main>
  );
}
