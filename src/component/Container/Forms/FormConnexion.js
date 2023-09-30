import React, { useState } from "react";
import classes from "./FormConnexion.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormConnexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  async function authHandler(profile) {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          method: "POST",
          body: JSON.stringify(profile),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      // handle data if needed
    } catch (error) {
      console.error(error);
    }
  }

  const SignInHandler = async () => {
    const profile = {
      email: enteredEmail,
      password: enteredPassword,
    };

    await authHandler(profile);
  };

  return (
    <div className={classes["user-profile-modal"]}>
      <h2>
        <b>J'ai déjà un compte</b>
      </h2>
      <h6>Renseignez votre E-mail de donneur</h6>

      <form>
        <div className="input-group mb-3">
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${classes["custom-input"]}`}
            placeholder="Votre adresse email"
            required
            onChange={emailHandler}
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
            onChange={passwordHandler}
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
        <button
          type="submit"
          className={`btn btn-primary ${classes["btn-pers"]}`}
          onClick={SignInHandler}
        >
          JE M'IDENTIFIE
        </button>
      </form>
    </div>
  );
};

export default FormConnexion;
