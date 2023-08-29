
import React, { useState } from "react";
import classes from "./FormConnexion.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormConnexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={classes["user-profile-modal"]}>
      <h2>
        <b>J'ai déjà un compte</b>
      </h2>
      <h6>
      Renseignez votre E-mail de donneur 
      </h6>

      <form>
        <div className= "input-group mb-3">
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${classes["custom-input"]}`}
            placeholder="Votre adresse email"
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="form-control custom-input"
            placeholder="Votre mot de passe"
            required
          />
          <div className="input-group-append">
            <span
              className="input-group-text"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash size="1.5em" color="gray" />
              ) : (
                <FaEye size="1.5em" color="gray" />
              )}
            </span>
          </div>
        </div>
        <a href="#">Mot de passe oublié</a>
        <br />
        <br />
        <button type="submit" className={`btn btn-primary ${classes["btn-pers"]}`}>
          JE M'IDENTIFIE
        </button>
      </form>
    </div>
  );
};

export default FormConnexion;
