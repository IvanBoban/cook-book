import { Container } from "@mui/material";
import { PageLayout } from "../../components";
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
      <Container></Container>
    </PageLayout>
  );
}
