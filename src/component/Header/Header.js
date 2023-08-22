import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import logoImage from "../../assets/img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import UserProfileModal from "./UserProfileModal";
import Button from "../../UI/Button";

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleProfileIconClick = () => {
    setPopupOpen(!isPopupOpen);
    // Empêcher le défilement lorsque le popup est ouvert
    document.body.style.overflow = isPopupOpen ? "auto" : "hidden";
  };

  const handleCloseIconClick = () => {
    setPopupOpen(false);
    // Rétablir le défilement lorsque le popup est fermé
    document.body.style.overflow = "auto";
  };

  const handleScrollToForm = () => {
    console.log("Button clicked! Scrolling to FormRendezVous");
    const formRendezVousElement = document.getElementById("formRendezVous");
    if (formRendezVousElement) {
      const scrollOptions = {
        behavior: "smooth",
        block: "start", // Scroll to the top of the target element
      };
      formRendezVousElement.scrollIntoView(scrollOptions);
    } else {
      console.log("Element not found");
    }
  };

  // Nettoyer l'écouteur d'événement lorsque le composant est démonté
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <nav
        className={`cc-navbar navbar navbar-expand-md navbar-dark position-fixed w-100 ${classes.navbar}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div>
              <img
                src={logoImage}
                alt="logo1"
                className={`${classes["img-fluid"]}`}
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item pe-4">
                <a
                  className={`nav-link active ${classes.navlink}`}
                  aria-current="page"
                  href="#"
                >
                  Accueil
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className={`nav-link active ${classes.navlink}`} href="#">
                  Santé citoyenne
                </a>
              </li>
              <li className="nav-item pe-4">
                {/* Utilisation de l'icône de profil */}
                <a
                  className={`nav-link active ${classes.navlink}`}
                  href="#"
                  onClick={handleProfileIconClick}
                >
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
              {/* <li className="nav-item pe-4">
                <Button onClick={handleScrollToForm}>
                  <a className={`btn text-white `} href="#">
                    Prendre rendez-vous
                  </a>
                </Button>
              </li> */}
              <li className="nav-item pe-4">
                <Button onClick={handleScrollToForm}>
                  Prendre rendez-vous
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isPopupOpen && (
        <>
          <div
            className={` ${classes["popup-overlay"]}`}
            onClick={handleCloseIconClick}
          ></div>
          <div className={`${classes["popup-wrapper "]}`}>
            <div className={`${classes["popup-box"]}`}>
              <div className={`${classes["popup-header"]}`}>
                <button
                  className={`${classes["close-icon"]}`}
                  onClick={handleCloseIconClick}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              {/* Contenu de la boîte de dialogue modale */}
              <UserProfileModal />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
