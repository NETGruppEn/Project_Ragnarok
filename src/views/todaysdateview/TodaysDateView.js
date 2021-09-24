import { useLocation } from "react-router"

export const TodaysDateView = () =>{

    const location = useLocation()
    return (
        <div>
            <h1>Todays date</h1>
            <h2>{location.state.welcomeMessage} {location.state.date}</h2>
        </div>
    )
}