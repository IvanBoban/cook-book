import { Input } from "@mui/material";

interface SearchBarProps {
  searchRecipes: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}
export default function SearchBar(props: SearchBarProps) {
  return <Input onChange={props.searchRecipes} sx={{ marginLeft: "10px" }} />;
}
