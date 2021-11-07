import React from "react";
import AppHeader from "../AppHeader";

interface PageLayoutProps {
  children?: React.ReactNode;
}
export default function PageLayout(props: PageLayoutProps) {
  return (
    <>
      <AppHeader />

      {props.children}
    </>
  );
}
