import "./Admin.scss";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AdminCreateProjetPage from "./AdminCreateProjetPage";
import developpeur from "../assets/developpeur.jpeg";

export default function Admin() {
  return (
    <>
      <Navbar />
      <div className="box">
        <div className="mask">
          <img className="into-img" src={developpeur} alt="imagedev" />
        </div>
        <div className="content">
          <div className="connexion">
            <h1 className="Admin">Admin</h1>
          </div>
          <Link to="/createprojet" element={<AdminCreateProjetPage />}>
            <p className="adminoption">AJOUTER UN PROJET</p>
          </Link>
          <p className="adminoption">MODIFIER UN PROJET</p>
          <Link to="/#homeHero" element={<HomeHero />}>
            <p className="adminoption">SUPPRIMER UN PROJET</p>
          </Link>
        </div>
      </div>
    </>
  );
}
