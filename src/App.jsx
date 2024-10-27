// App.jsx
import Logo from "./pages/Logo";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import { RecipesProvider } from "./components/recipeProvider";

function App() {
  return (
    <RecipesProvider> 
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </RecipesProvider>
  );
}

export default App;

