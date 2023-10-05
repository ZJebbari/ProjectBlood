import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import logoImage from "../../assets/img/logo1.png";

import classes from "./HeaderAdmin.module.css";

import { FaSignOutAlt } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../../store/actions/user";

const HeaderUser = (props) => {
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearCurrentUser());
    navigate("/");
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
            <div className="d-flex align-items-center ms-auto">
              <span className={`username ${classes.username}`}>
                {currentUser.name}
              </span>
              <span onClick={logout} className={`${classes["clickable"]}`}>
                <FaSignOutAlt size="2em" className={`${classes["icon"]}`} />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderUser;
