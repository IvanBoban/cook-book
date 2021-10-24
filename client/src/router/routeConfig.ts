import Route from "../model/Route";
import { HOME_PAGE, ERROR_PAGE, RECIPE_PAGE } from "./constants";
import { HomePage, ErrorPage, RecipePage } from "../pages";

const Routes: Array<Route> = [
  { name: "Home page", component: HomePage, path: HOME_PAGE, exact: true },
  {
    name: "Recipe page",
    component: RecipePage,
    path: RECIPE_PAGE,
    exact: true,
  },
  { name: "Error page", component: ErrorPage, path: ERROR_PAGE, exact: true },
];

export default Routes;
