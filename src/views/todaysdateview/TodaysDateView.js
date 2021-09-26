import { DisplayTodaysDate } from "../../components/displaydata/displaytodaysdate/DisplayTodaysDate"

/**
 * TodaysDateView is a component that displays todays date.
 * @returns Titel and component <DisplayTodaysDate/>
 */
export const TodaysDateView = () =>{

    return (
        <div>
            <h1>Todays date</h1>
            <DisplayTodaysDate/>
        </div>
    )
}