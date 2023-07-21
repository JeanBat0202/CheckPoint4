import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "./PrivateBtn.scss";

// eslint-disable-next-line react/prop-types
export default function PrivateBtn({ authorizedRoles, projetId }) {
  const navigate = useNavigate();
  const [{ user }] = useUserContext();

  const deleteProjet = () => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    if (confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projets/${projetId}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then(() => navigate("/admin"))
        .catch((err) => console.error(err));
    }
  };

  // eslint-disable-next-line react/prop-types
  if (user && authorizedRoles.find((role) => role === user.role_id)) {
    return (
      <button className="btn" type="button" onClick={deleteProjet}>
        <p className="deletebtn">Supprimer</p>
        <p className="deletebtn">Modifer</p>
      </button>
    );
  }
}
