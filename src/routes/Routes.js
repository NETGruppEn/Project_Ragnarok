import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "../views/homeview/HomeView";
import DetailsView from "../views/detailsview/DetailsView";
import RoutingPath from "./RoutingPath";

/**
 * Routes uses BrowserRouter, Switch, Route that is included when "react-router-dom" is installed.
 * BrowserRouter is the parent component that is used to store all of the other components ({children}) so the user can change between diffrent views.
 * Switch is used to render only the first route that matches the location rather than rendering all matching routes.
 * Route is used to renders some UI when its path matches the current URL.
 * Route uses RoutingPath so we dont have to hard code the path.
 * ! react router dom needs to be installed to work (npm install --save react-router-dom). Alredy installed on this project.
 * ! exact path = the URL needs to be an exact match.
 * ! path = the URL DONT need to be an exact match.
 * @param {children}
 * @returns BrowserRouter, Switch and Route to TodaysDateView and HomeView.
 */
export const Routes = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        {/* <Route exact path={RoutingPath.detailsView} component={DetailsView} /> */}
        <Route path={RoutingPath.homeView} component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
};
