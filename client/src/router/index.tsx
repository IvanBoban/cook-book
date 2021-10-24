import { Switch, Route } from "react-router-dom";
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
    </Switch>
  );
}
