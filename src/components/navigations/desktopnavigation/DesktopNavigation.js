import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";

/**
 * DesktopNavigation is a component that controlls the navigation for desktop.
 * It shows two buttons in the nav that sends the user to either homeView or todaysDateView depending on wich button is pressed.
 * An object message{} that contains a welcomeMessage and todaysDate is creted and pushed with the hook useHistory when the Todays Date button is pressed.
 * @returns A button "Home" that pushes the user to homeView and a button "Todays Date" that pushes the user to todaysDateView and also pushes the object message.
 */
export const DesktopNavigation = () => {
  const history = useHistory();

  const date = new Date();
  const todaysDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const message = {
    welcomeMessage: "Welcome, todays date is",
    date: todaysDate,
  };
  return (
    <div>
      <button onClick={() => history.push(RoutingPath.homeView)}>Home</button>
      <button
        onClick={() =>
          history.push({ pathname: RoutingPath.todaysDateView, state: message })
        }
      >
        Todays Date
      </button>
    </div>
  );
};
