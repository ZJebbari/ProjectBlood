import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import logoImage from "../../assets/img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import UserProfileModal from "./UserProfileModal";
import Button from "../../UI/Button";
import { Offcanvas, Stack, Modal, Form } from "react-bootstrap";
import Signup from "../Container/Forms/Sinup";

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setPopupOpen(false); // Fermez également la popup Offcanvas si elle est ouverte
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleProfileIconClick = () => {
    setPopupOpen(!isPopupOpen);
    // Empêcher le défilement lorsque le popup est ouvert
  };

  const handleCloseIconClick = () => {
    setPopupOpen(false);
    // Rétablir le défilement lorsque le popup est fermé
  };

  // Nettoyer l'écouteur d'événement lorsque le composant est démonté

  const handleScrollToForm = () => {
    const formRendezVousElement = document.getElementById("formRendezVous");
    if (formRendezVousElement) {
      const scrollOptions = {
        behavior: "smooth",
        block: "start", // Scroll to the top of the target element
      };
      formRendezVousElement.scrollIntoView(scrollOptions);
    }
  };

  const handleScrollToCitoyenne = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor element

    const donInformation = document.getElementById("donInfo");
    if (donInformation) {
      const scrollOptions = {
        behavior: "smooth",
        block: "start",
      };

      donInformation.scrollIntoView(scrollOptions);
    }
  };

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
                <a
                  onClick={handleScrollToCitoyenne}
                  className={`nav-link active ${classes.navlink}`}
                >
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

              <Button onClick={handleScrollToForm}>Prendre rendez-vous</Button>
            </ul>
          </div>
        </div>
      </nav>
      {
        <Offcanvas
          show={isPopupOpen}
          onHide={handleCloseIconClick}
          placement="end"
          style={{ width: "520px" }}
        >
          <Offcanvas.Header>
            <button
              className={`${classes["close-icon"]}`}
              onClick={handleCloseIconClick}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Contenu de la boîte de dialogue modale */}
            <UserProfileModal openModal={openModal} />
          </Offcanvas.Body>
        </Offcanvas>
      }

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
