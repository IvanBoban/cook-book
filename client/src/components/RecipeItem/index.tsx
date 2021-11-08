import { Container, Grid, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Recipe from "../../model/Recipe";
import { RECIPE_PAGE } from "../../router/constants";

interface RecipeItemProps {
  recipe: Recipe;
}
export default function RecipeItem(props: RecipeItemProps) {
  const { recipe } = props;
  return (
    <Container
      component={Link}
      to={RECIPE_PAGE.replace(":id", recipe.id.toString())}
      sx={{
        marginBottom: "10px",
        textDecoration: "none",
        color: "inherit",
        border: "2px solid black",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", padding: "20px" }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6">{recipe.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">
            Number of servings: {recipe.numberOfServings}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Rating
            name={`recipe-${recipe.id}-rating`}
            value={recipe.ratings.reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            )}
            readOnly
          />
        </Grid>
      </Grid>
    </Container>
  );
}
