import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";

export const DesktopNavigation = () => {

const history = useHistory()

    return (
        <div>
            <button onClick={ () => history.push(RoutingPath.homeView)}>Home</button>
            <button onClick={ () => history.push(RoutingPath.todaysDateView)}>Todays Date</button>
        </div>
    )
}
