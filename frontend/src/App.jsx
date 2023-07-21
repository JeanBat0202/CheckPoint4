import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./assets/fonts/static/Outfit-Regular.ttf";
import ProjetDetails from "./pages/ProjetDetails";
import Connexion from "./pages/Connexion";
import Admin from "./pages/Admin";
import AdminCreateProjetPage from "./pages/AdminCreateProjetPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet/:id" element={<ProjetDetails />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/createprojet" element={<AdminCreateProjetPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
