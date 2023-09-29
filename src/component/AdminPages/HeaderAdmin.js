import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import logoImage from "../../assets/img/logo1.png";

import classes from "./HeaderAdmin.module.css";

import { FaSignOutAlt } from 'react-icons/fa';

import { Link, useNavigate} from "react-router-dom";


const HeaderUser = (props) => {
  const history=useNavigate();
  
  const  logoutClick = () => {
    history("/") // Appel à la fonction depuis les props
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

             <span onClick={logoutClick}><FaSignOutAlt size="2em" color="white" /></span>
             
            </ul>
          </div>
        </div>


      </nav>
    </>
  );
};

export default HeaderUser;
