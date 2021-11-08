import { Container } from "@mui/material";
import React from "react";
import AppHeader from "../AppHeader";

interface PageLayoutProps {
  children?: React.ReactNode;
}
export default function PageLayout(props: PageLayoutProps) {
  return (
    <>
      <AppHeader />
      <Container sx={{ padding: "20px" }}> {props.children}</Container>
    </>
  );
}
