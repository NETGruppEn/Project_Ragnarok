import { useLocation } from "react-router";

/**
 * DisplayTodaysDate is a component that shows todays date when used.
 * With help from the uaseLoacation hook, the state that is pushed with useHistory from the DesktopNavigation is displayed when used.
 * @returns welcomeMessage and date are displayed from the location state.
 */
export const DisplayTodaysDate = () => {
  const location = useLocation();

  return (
    <div>
      <h2>
        {location.state.welcomeMessage} {location.state.date}
      </h2>
    </div>
  );
};
