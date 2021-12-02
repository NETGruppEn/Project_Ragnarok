import { DisplayTodaysDate } from "../../components/displaydata/displaytodaysdate/DisplayTodaysDate";
import {Head} from "../../shared/global/Functions";

/**
 * TodaysDateView is a component that displays todays date.
 * @returns Titel and component <DisplayTodaysDate/>
 */
export const TodaysDateView = () => {
  return (
    [
      Head("Todays Date"),  
    <div>
      <h1>Todays date</h1>
      <DisplayTodaysDate />
    </div>
    ]
    );
};
