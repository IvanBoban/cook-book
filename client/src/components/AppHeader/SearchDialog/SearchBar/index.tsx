import { Input } from "@mui/material";
import React from "react";
import useSearchBar from "./useSearchBar";

export default function SearchBar() {
  const { recipes, searchRecipes } = useSearchBar();

  return <Input onChange={searchRecipes} />;
}
