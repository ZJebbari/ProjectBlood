import React, { useState } from "react";
import classes from"./UserProfile.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormConnexion from "../Container/Forms/FormConnexion";

const UserProfileModal = () => {
  return (
    <div  className={` ${classes["user-profile-modal"]}`}>
      <div  className={` ${classes["classe"]}`}>
        <h2>
          <b>Vous n'avez pas encore de compte?</b>
        </h2>
        <h6>creez votre compte en quelques minutes </h6>
        <button type="submit" className={`btn btn-primary ${classes["btn-pers"]}`}>
          JE CREE UN COMPTE
        </button>
      </div>
      <div className={` ${classes["classe"]}`}>
      <hr/> 
      <FormConnexion  />
      </div>
      
    </div>
  );
};

export default UserProfileModal;
