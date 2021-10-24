import { Switch, Route, Redirect } from "react-router-dom";
import { NOT_FOUND_PAGE } from "./constants";
import routes from "./routeConfig";
export default function Router() {
  return (
    <Switch>
      {routes.map((route) => {
        const Component = route.component as React.ElementType;
        return (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            render={() => <Component />}
          />
        );
      })}
      <Route
        path="*"
        key="unsupported route"
        render={() => <Redirect to={NOT_FOUND_PAGE} />}
      />
    </Switch>
  );
}
