import "./HomeHero.scss";
import developpeur from "../assets/developpeur.jpeg";

export default function HomeHero() {
  return (
    <div id="top" className="hero">
      <div className="mask">
        <img className="into-img" src={developpeur} alt="imagedev" />
      </div>
      <div className="content">
        <h1>Bienvenue.</h1>
      </div>
      <p className="ProjetBtn">
        <a href="#mes-projets">Mes Projets</a>
      </p>
    </div>
  );
}
