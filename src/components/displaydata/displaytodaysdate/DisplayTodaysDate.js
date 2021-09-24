import { useLocation } from "react-router"
 export const DisplayTodaysDate = () => {

    const location = useLocation()

     return (
         <div>
             <h2>{location.state.welcomeMessage} {location.state.date}</h2>
         </div>
     )
 }
 