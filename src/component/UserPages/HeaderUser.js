import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import logoImage from "../../assets/img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./HeaderUser.module.css";
import { Dropdown } from "react-bootstrap";
import Button from "../../UI/Button";
import { Link, useNavigate} from "react-router-dom";


const HeaderUser = () => {
  
const history = useNavigate();
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
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className={`no-caret nav-item pe-4 bg-transparent border-0 ${classes.customToggle}`}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`nav-link active ${classes.navlink} ${classes.customIcon}`}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu className={` ${classes.dropdownmenu}`}>
                  <Dropdown.Item className={` ${classes.dropdownitem}`}  onClick={() => history("/dashboard")}>
                    
                  
                      Mon profil
                    
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={` ${classes.dropdownitem}`}
                    href="#"
                  >
                    Déconnecter
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              &emsp;
              <Button onClick={handleScrollToForm}>Prendre rendez-vous</Button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderUser;
