import { Drawer } from "@mui/material";
import React from "react";

interface SideDrawerProps {
  isOpen: boolean;
  closeFunction: () => void;
}
export default function SideDrawer(props: SideDrawerProps) {
  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.closeFunction}>
      IM
    </Drawer>
  );
}
