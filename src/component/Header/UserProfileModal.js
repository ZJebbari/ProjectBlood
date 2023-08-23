import React, { useState } from "react";
import classes from "./UserProfile.module.css";
import { Button, Modal, Form } from 'react-bootstrap';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormConnexion from "../Container/Forms/FormConnexion";
import Signup from "../Container/Forms/Sinup";

const UserProfileModal = ({openModal}) => {
  
  
  return (
    <div className={` ${classes["user-profile-modal"]}`}>
      <div className={` ${classes["classe"]}`}>
        <h2>
          <b>Vous n'avez pas encore de compte?</b>
        </h2>
        <h6>creez votre compte en quelques minutes </h6>
        <Button
          type="button"
          className={`btn btn-primary ${classes["btn-pers"]}`}
          onClick={openModal}
        >
          JE CRÉE UN COMPTE
        </Button>
      </div>
      <div className={` ${classes["classe"]}`}>
        <hr />
        <FormConnexion />
      </div>
   
    </div>
  );
};

export default UserProfileModal;
