import React from "react";
import useLoading from "../../hooks/useLoading";
import useRecipePage from "./useRecipePage";

export default function RecipePage() {
  const [isLoading, { disableLoading }] = useLoading(true);
  const { recipe } = useRecipePage(disableLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>Recipe page</div>;
}
