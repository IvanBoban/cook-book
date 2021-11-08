import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Recipe from "../../model/Recipe";
import { RECIPE_PAGE } from "../../router/constants";

interface RecipeItemProps {
  recipe: Recipe;
}
export default function RecipeItem(props: RecipeItemProps) {
  const { recipe } = props;
  return (
    <Box component={Link} to={RECIPE_PAGE.replace(":id", recipe.id.toString())}>
      <Container>
        <Grid container>
          <Grid item xs={4}>
            {recipe.name}
          </Grid>
          <Grid item xs={8}>
            {recipe.numberOfServings}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
