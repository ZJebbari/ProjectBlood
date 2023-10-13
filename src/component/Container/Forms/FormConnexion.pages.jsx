import React, { useEffect, useState } from "react";
import classes from "./FormConnexion.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import User from "../../../models/user";
import authenticationService from "../../../services/authentication.service";
import { setCurrentUser } from "../../../store/actions/user";
import { Link } from "react-router-dom";

const FormConnexion = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // const [user, setUser] = useState(
  //   new User("", "", "", "", "", "", "", "", "", "")
  // );
  const [user, setUser] = useState(new User("", "", ""));
  const [loading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //mounted
  useEffect(() => {
    if (currentUser?.id) {
      if (currentUser.role === "USER") {
        navigate("/UserHomePage");
      }
      if (currentUser.role === "ADMIN") {
        navigate("/AdminHomePage");
      }
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setSubmited(true);
    if (!user.username || !user.password) {
      return;
    }
    setLoading(true);

    authenticationService
      .login(user)
      .then((response) => {
        // set user in session
        dispatch(setCurrentUser(response.data));
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Nom d'utilisateur ou mot de passe non valide.");
        setLoading(false);
      });
  };

  return (
    <div className={classes["user-profile-modal"]}>
      <h2>
        <b>J'ai déjà un compte</b>
      </h2>
      <h6>Renseignez votre E-mail de donneur</h6>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleLogin}>
        <div className="input-group mb-3">
          <input
            type="text"
            id="username"
            name="username"
            className={`form-control ${classes["custom-input"]}`}
            placeholder="Votre adresse email"
            value={user.username}
            onChange={(e) => handleChange(e)}
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
            value={user.password}
            onChange={(e) => handleChange(e)}
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
        <button
          className={`btn btn-primary ${classes["btn-pers"]}`}
          disabled={loading}
        >
          JE M'IDENTIFIE
        </button>
      </form>
    </div>
  );
};

export default FormConnexion;
