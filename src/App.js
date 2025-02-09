import { Routes } from "./routes/Routes";
import PokemonProvider from "./shared/provider/PokemonProvider";
import "./shared/global/Global.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Divider from "./components/divider/Divider";

/**
 * <PokemonProvider> wraps <Routes> and <Navigation> so they can access is possible.
 * <Routes> wraps <Navigation> so access also ther is possible.
 * ! Global.css is imported so everything in App has access to it.
 * @returns
 */
function App() {
  return (
    <PokemonProvider>
      <Header />
      <Routes />
      <Divider className="footer" />
      <Footer />
    </PokemonProvider>
  );
}

export default App;
