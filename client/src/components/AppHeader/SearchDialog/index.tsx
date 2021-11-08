import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import Recipe from "../../../model/Recipe";
import RecipeItem from "../../RecipeItem";
import SearchBar from "./SearchBar";
import useSearch from "./useSearch";

interface SearchDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
}

export default function SearchDialog(props: SearchDialogProps) {
  const { recipes, searchRecipes, resetSearch } = useSearch();

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.closeDialog}
      TransitionProps={{ onExited: resetSearch }}
    >
      <DialogTitle>
        Search recipe
        <SearchBar searchRecipes={searchRecipes} />
      </DialogTitle>

      <DialogContent>
        <RecipeMapper recipes={recipes} />
      </DialogContent>
    </Dialog>
  );
}

interface RecipeMapperProps {
  recipes: Recipe[];
}
function RecipeMapper(props: RecipeMapperProps) {
  const { recipes } = props;
  console.log(recipes);
  if (recipes.length === 0) {
    return (
      <Typography variant="body1"> Search by name or ingredient </Typography>
    );
  }

  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.name} recipe={recipe} />
      ))}
    </>
  );
}
