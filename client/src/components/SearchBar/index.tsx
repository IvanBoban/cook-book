import React from "react";
import useSearchBar from "./useSearchbar";

export default function SearchBar() {
  const { recipes, searchRecipes } = useSearchBar();

  return <input onChange={searchRecipes} />;
}
