/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProjetDetails.scss";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjetDetails() {
  const [projet, setProjet] = useState();
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const getOneProjet = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projets/${id}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProjet(data));
  };

  useEffect(() => {
    getOneProjet();
  }, [id]);

  if (!projet) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Navbar />
      <h1 className="ProjetTitle">{projet.title}</h1>
      <div className="ProjetDetailContainer">
        <Slider className="Slider" {...settings}>
          <div className="DetailImageContainer">
            <img
              className="ImgDetails"
              src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/projets/${
                projet.image1
              }`}
              alt={projet.title}
            />
          </div>
          <div className="DetailImageContainer">
            <img
              className="ImgDetails"
              src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/projets/${
                projet.image2
              }`}
              alt={projet.title}
            />
          </div>
          <div className="DetailImageContainer">
            <img
              className="ImgDetails"
              src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/projets/${
                projet.image3
              }`}
              alt={projet.title}
            />
          </div>
        </Slider>
        <p className="Concept">{projet.concept}</p>
      </div>
    </>
  );
}
