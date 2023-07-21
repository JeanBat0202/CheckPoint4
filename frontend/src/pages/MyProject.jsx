import "./MyProject.scss";
import { useEffect, useState } from "react";
import OneProject from "../components/OneProject";

export default function MyProject() {
  const [projetList, setProjetList] = useState([]);

  const getProjets = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projets/`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProjetList(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProjets();
  }, []);

  return (
    <div id="mes-projets" className="MyProjectPage">
      <h1 className="MyProject">Mes Projets.</h1>
      <div className="ProjectListContainer">
        {projetList.map((projet) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <OneProject {...projet} key={`projet-${projet.id}`} />
        ))}
      </div>
    </div>
  );
}
