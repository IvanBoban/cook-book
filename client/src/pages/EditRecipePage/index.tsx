import EditRecipePageForm from "./EditRecipePageForm";
import useEditRecipePage from "./useEditRecipePage";

export default function EditRecipePage() {
  const { isLoading, recipeData } = useEditRecipePage();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <main>
      <h3>Edit recipe</h3>
      <EditRecipePageForm recipeData={recipeData!} />
    </main>
  );
}
