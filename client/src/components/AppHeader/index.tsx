import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useSideDrawer from "./useSideDrawer";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import { ADD_RECIPE_PAGE } from "../../router/constants";
import SearchBar from "../SearchBar";

export default function AppHeader() {
  const [isOpen, { openSideDrawer, closeSideDrawer }] = useSideDrawer();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
              onClick={openSideDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 2 }}>
              <SearchBar />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton component={Link} to={ADD_RECIPE_PAGE}>
                <AddCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SideDrawer isOpen={isOpen} closeFunction={closeSideDrawer} />
    </>
  );
}
