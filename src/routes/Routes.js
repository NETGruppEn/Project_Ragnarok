import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/homeview/HomeView";
import { TodaysDateView } from "../views/todaysdateview/TodaysDateView";
import RoutingPath from "./RoutingPath";

export const Routes = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.todaysDateView} component={TodaysDateView}/>
        <Route path={RoutingPath.homeView} component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
};
