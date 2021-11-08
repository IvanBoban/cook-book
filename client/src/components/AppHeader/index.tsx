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
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import useSearchDialog from "./useSearchDialog";
import SearchDialog from "./SearchDialog";

export default function AppHeader() {
  const [isSideDrawerOpen, { openSideDrawer, closeSideDrawer }] =
    useSideDrawer();
  const [isSearchDialogOpen, { openSearchDialog, closeSearchDialog }] =
    useSearchDialog();
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
            <Typography variant="h6"> Cook book</Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton onClick={openSearchDialog}>
                <SearchIcon />
              </IconButton>
              <IconButton component={Link} to={ADD_RECIPE_PAGE}>
                <AddCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SearchDialog
        isOpen={isSearchDialogOpen}
        closeDialog={closeSearchDialog}
      />
      <SideDrawer isOpen={isSideDrawerOpen} closeFunction={closeSideDrawer} />
    </>
  );
}
