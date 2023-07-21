import "./OneProject.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PrivateBtn from "./PrivateBtn";

export default function OneProject({ id, title, image1 }) {
  return (
    <div className="ProjectContainer">
      <figure className="ImageContainer">
        <PrivateBtn authorizedRoles={[2]} projetId={id} />
        <Link to={`/projet/${id}`} className="link">
          <img
            className="WildEats1"
            src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/projets/${image1}`}
            alt="WildEats1"
          />
        </Link>
        <h1 className="titleprojet">{title}</h1>
      </figure>
    </div>
  );
}

OneProject.propTypes = {
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  image1: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.number,
};
