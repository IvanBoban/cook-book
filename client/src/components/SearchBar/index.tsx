import React from "react";
import useSearchBar from "./useSearchBar";

export default function SearchBar() {
  const { recipes, searchRecipes } = useSearchBar();

  return <input onChange={searchRecipes} />;
}
