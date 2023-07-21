import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import PrivateLink from "./PrivateLink";
import { useUserContext } from "../context/UserContext";

export default function Navbar() {
  const [{ user }] = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => setIsOpen(!isOpen);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "header header-bg" : "header"}>
      <div>
        <h2 className="logo">Jb.</h2>
      </div>

      <div>
        <ul id="navbar" className={isOpen ? "#navbar active" : "#navbar"}>
          <Link to="/">
            <li>
              <a href="top">Home</a>
            </li>
          </Link>
          <li>
            <a href="#mes-projets">Projet</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
          <Link to="/Connexion">
            <li>
              <a href="Connexion">LogIn</a>
            </li>
          </Link>
          {user ? (
            <PrivateLink to="/admin" text="Admin" authorizedRoles={[2]} />
          ) : null}
        </ul>
      </div>

      <div id="mobile">
        <button type="button" onClick={handleClickMenu}>
          <div id="bar" className={isOpen ? "fas fa-times" : "fas fa-bars"} />
        </button>
      </div>
    </nav>
  );
}
