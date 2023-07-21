import "./AdminCreateProjet.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminCreateProjet() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [concept, setConcept] = useState("");
  const [date, setDate] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeConcept = (e) => {
    setConcept(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

  const handleChangeImage1 = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImage1(e.target.files[0]);
    } else {
      console.error("Votre image doit être au format .jpeg, .jpg ou .png.");
    }
  };

  const handleChangeImage2 = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImage2(e.target.files[0]);
    } else {
      console.error("Votre image doit être au format .jpeg, .jpg ou .png.");
    }
  };

  const handleChangeImage3 = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImage3(e.target.files[0]);
    } else {
      console.error("Votre image doit être au format .jpeg, .jpg ou .png.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !concept || !date || !image1 || !image2 || !image3) {
      console.info("Veuillez remplir tous les champs obligatoires.");
    } else {
      const modelData = new FormData();
      console.info(concept.replace(". ", ".\n"));
      modelData.append("title", title);
      modelData.append("concept", concept);
      modelData.append("date", date);
      modelData.append("image1", image1);
      modelData.append("image2", image2);
      modelData.append("image3", image3);

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projets`, {
        method: "POST",
        credentials: "include",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: modelData,
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/projet/${data.id}`);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="boxContainer">
      <div className="connexion">
        <h1 className="TitleAddProjet">Ajouter un projet</h1>
      </div>
      <form
        className="form"
        name="connexion"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <p className="titlelabel">Titre: </p>
        <input
          className="inputtext"
          placeholder="Titre"
          type="text"
          name="Titre"
          required
          value={title}
          onChange={handleChangeTitle}
        />

        <label className="form" name="connexion">
          <p className="titlelabel">Description: </p>
          <textarea
            className="inputtext"
            placeholder="Description"
            type="text"
            name="Description"
            required
            value={concept}
            onChange={handleChangeConcept}
          />
        </label>
        <label className="form" name="connexion">
          <p className="titlelabel">Date: </p>
          <input
            className="inputtext"
            placeholder="AAAA-MM-JJ"
            type="text"
            name="Titre"
            required
            value={date}
            onChange={handleChangeDate}
          />
        </label>
        <label htmlFor="image">
          <p className="titlelabel">Image1 </p>
          <input type="file" id="image" onChange={handleChangeImage1} />
        </label>
        <label htmlFor="image">
          <p className="titlelabel">Image2 </p>
          <input type="file" id="image" onChange={handleChangeImage2} />
        </label>
        <label htmlFor="image">
          <p className="titlelabel">Image3 </p>
          <input type="file" id="image" onChange={handleChangeImage3} />
        </label>
        <button id="btnsubmit" type="submit">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
