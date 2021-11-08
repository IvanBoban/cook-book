import { PageLayout } from "../../components";
import RecipeItem from "../../components/RecipeItem";
import useLoading from "../../hooks/useLoading";
import useHomePage from "./useHomePage";

export default function HomePage() {
  const [isLoading, { disableLoading }] = useLoading(true);
  const { recipes } = useHomePage(disableLoading);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (recipes.length === 0) {
    return <div>No recipes yet go and create some!</div>;
  }

  return (
    <PageLayout>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.name} recipe={recipe} />
      ))}
    </PageLayout>
  );
}
