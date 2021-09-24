import { Routes } from "./routes/Routes";
import { Navigations } from "./components/navigations/Navigations";
import { PokemonProvider } from "./shared/provider/PokemonProvider";

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
