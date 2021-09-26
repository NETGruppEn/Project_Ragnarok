import { Routes } from "./routes/Routes";
import { Navigations } from "./components/navigations/Navigations";
import { PokemonProvider } from "./shared/provider/PokemonProvider";
import "./shared/global/Global.css"

/**
 * <PokemonProvider> wraps <Routes> and <Navigation> so they can access is possible.
 * <Routes> wraps <Navigation> so access also ther is possible.
 * ! Global.css is imported so everything in App has access to it. 
 * @returns 
 */
function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Navigations />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
