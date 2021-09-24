import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";

export const DesktopNavigation = () => {

const history = useHistory()

const date = new Date()
const todaysDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
const message = {welcomeMessage: "Welcome, todays date is", date: todaysDate}
    return (
        <div>
            <button onClick={ () => history.push(RoutingPath.homeView)}>Home</button>
            <button onClick={ () => history.push({pathname: RoutingPath.todaysDateView, state: message})}>Todays Date</button>
        </div>
    )
}
