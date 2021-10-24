import React from "react";
import useLoading from "../../hooks/useLoading";
import useHomePage from "./useHomePage";

export default function HomePage() {
  const [isLoading, { disableLoading }] = useLoading(true);
  useHomePage(disableLoading);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return <div>Home page</div>;
}
