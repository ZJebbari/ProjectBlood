import { React, useEffect, useRef, useState } from "react";
import { Form, Card, Alert, Breadcrumb } from "react-bootstrap";
import Button from "../../../UI/Button";
import { MdEmail } from "react-icons/md";
import {
  FaUser,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import useInput from "../../hooks/use-input";
import classes from "./SignUp.module.css";
import User from "../../../models/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import authenticationService from "../../../services/authentication.service";
import UserProfileModal from "../../Header/UserProfileModal";

const SignUp = (props) => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const close = true;

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {
    value: name,
    isValid: enteredFullNameIsValid,
    hasError: fullNameHasError,
    valueHandler: fullNameHandler,
    inputBlurHandler: fullNameOnBlur,
    reset: fullNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: sexe,
    isValid: enteredSexeIsValid,
    hasError: sexeHasError,
    valueHandler: sexeHandler,
    inputBlurHandler: sexeOnBlur,
    reset: sexeReset,
  } = useInput((value) => value !== "Genre" && value.trim() !== "");
  const {
    value: username,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueHandler: emailHandler,
    inputBlurHandler: emailOnBlur,
    reset: emailReset,
  } = useInput((value) => value.includes(""));
  const {
    value: city,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueHandler: cityHandler,
    inputBlurHandler: cityOnBlur,
    reset: cityReset,
  } = useInput(
    (value) => value.trim() !== "Trouver un lieu de don" && value.trim() !== ""
  );
  const {
    value: phone,
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueHandler: phoneHandler,
    inputBlurHandler: phoneOnBlur,
    reset: phoneReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: date,
    isValid: enteredDateIsValid,
    hasError: dateHasError,
    valueHandler: dateHandler,
    inputBlurHandler: dateOnBlur,
    reset: dateReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: password,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueHandler: passwordHandler,
    inputBlurHandler: passwordOnBlur,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "" && value.trim().length >= 8);
  const {
    value: passwordComfirm,
    isValid: enteredpasswordComfirmIsValid,
    hasError: passwordComfirmHasError,
    valueHandler: passwordComfirmHandler,
    inputBlurHandler: passwordComfirmOnBlur,
    reset: passwordComfirmReset,
  } = useInput((value) => value.trim() !== "" && value.trim().length >= 8);

  // async function addHandler(profile) {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/v1/auth/register",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(profile),
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const data = await response.json();
  //     // handle data if needed
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   if (
  //     !enteredFullNameIsValid ||
  //     !enteredSexeIsValid ||
  //     !enteredCityIsValid ||
  //     !enteredEmailIsValid ||
  //     !enteredPhoneIsValid ||
  //     !enteredDateIsValid ||
  //     !enteredPasswordIsValid ||
  //     !enteredpasswordComfirmIsValid
  //   ) {
  //     return;
  //   }

  //   if (password !== passwordComfirm) {
  //     // Show some error to the user about passwords not matching
  //     return;
  //   }

  //   const profile = {
  //     fullname: fullName,
  //     gender: sexe,
  //     city: city,
  //     phone: phone,
  //     date: date,
  //     email: email,
  //     password: password, // be careful sending passwords like this
  //   };

  //   await addHandler(profile);
  //   fullNameReset();
  //   sexeReset();
  //   cityReset();
  //   emailReset();
  //   phoneReset();
  //   dateReset();
  //   passwordReset();
  //   passwordComfirmReset();
  // };

  // save user in the local storage and submit to the backend

  const [user, setUser] = useState(new User("", "", "", "", "", "", ""));
  const [loading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentUser = useSelector((state) => state.user);

  const navigate = useNavigate();
  
  
  //mounted
  useEffect(() => {
    if (currentUser?.id) {
      //Navigate
      navigate("/UserHomePage");
    }
  }, []);

  useEffect(() => {
    setUser(new User(name, sexe, city, phone, date, username, password));
  }, [name, sexe, city, username, phone, date, password]);

  const submitHandler = (event) => {
    props.ValiderForm();
    event.preventDefault();
    console.log();
    setSubmited(true);

    if (
      !enteredFullNameIsValid ||
      !enteredSexeIsValid ||
      !enteredCityIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneIsValid ||
      !enteredDateIsValid ||
      !enteredPasswordIsValid ||
      !enteredpasswordComfirmIsValid
    ) {
      return;
    }

    setLoading(true);

    authenticationService
      .register(user)
      .then((_) => {
        navigate("/");
        props.closeModal();
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.status === 409) {
          setErrorMessage("userName or password is not valid.");
        } else {
          setErrorMessage("Unexpected error occured.");
        }
        setLoading(false);
      });

    fullNameReset();
    sexeReset();
    cityReset();
    emailReset();
    phoneReset();
    dateReset();
    passwordReset();
    passwordComfirmReset();
  };

  //////

  const fullNameClasses = fullNameHasError ? `${classes.invalid} ` : "";

  const sexeClasses = sexeHasError
    ? `${classes.invalid} form-select`
    : "form-select";
  const cityClasses = cityHasError ? `${classes.invalid}` : "";
  const emailClasses = emailHasError ? classes.invalid : "";
  const phoneClasses = phoneHasError
    ? `${classes.invalid} form-control `
    : "form-control";
  const dateClasses = dateHasError
    ? `${classes.invalid} form-control `
    : "form-control";
  const passwordClasses = passwordHasError ? `${classes.invalid} ` : "";
  const passworConfirmdClasses = passwordComfirmHasError
    ? `${classes.invalid} `
    : "";

  return (
    <>
      <Card>
        <Card.Body>
          <h6 className="text-center mb-4">
            Veuillez remplir le formulaire d'inscription
          </h6>
          <Form onSubmit={submitHandler}  >
            <Form.Group controlId="fullName">
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser size="1em" color="gray" />
                </span>
                <Form.Control
                  className={fullNameClasses}
                  type="text"
                  placeholder="Votre nom complet"
                  onChange={fullNameHandler}
                  onBlur={fullNameOnBlur}
                  value={name}
                />
              </div>
              {fullNameHasError && <p>Veuillez entrer votre nom complet</p>}
            </Form.Group>

            <Form.Group controlId="sexe">
              {!fullNameHasError && <Form.Label> </Form.Label>}
              <div className="input-group">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  <FaMale size="1em" color="gray" />
                </label>
                <select
                  className={sexeClasses}
                  id="inputGroupSelect"
                  onChange={sexeHandler}
                  onBlur={sexeOnBlur}
                  value={sexe}
                >
                  <option value="Genre" className="text-muted">
                    Genre
                  </option>
                  <option value="1">Femme</option>
                  <option value="2">Homme</option>
                </select>
              </div>
              {sexeHasError && <p>Veuillez choisir votre sexe</p>}
            </Form.Group>

            <Form.Group controlId="email">
              {!sexeHasError && <Form.Label> </Form.Label>}
              <div className="input-group">
                <span className="input-group-text">
                  <MdEmail size="1em" color="gray" />
                </span>
                <Form.Control
                  className={emailClasses}
                  type="text"
                  placeholder="Votre adresse email"
                  onChange={emailHandler}
                  onBlur={emailOnBlur}
                  value={username}
                />
              </div>
              {emailHasError && <p>Veuillez entrer votre E-mail</p>}
            </Form.Group>
            <Form.Group controlId="city">
              {!emailHasError && <Form.Label> </Form.Label>}
              <div className="input-group">
                <span className="input-group-text">
                  <FaMapMarkerAlt size="1em" color="gray" />
                </span>
                <Form.Control
                  className={cityClasses}
                  type="text"
                  placeholder="Votre ville"
                  onChange={cityHandler}
                  onBlur={cityOnBlur}
                  value={city}
                />
              </div>
              {cityHasError && <p>Veuillez choisir votre lieu</p>}
            </Form.Group>
            <Form.Group controlId="phone">
              {!cityHasError && <Form.Label> </Form.Label>}
              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone size="1em" color="gray" />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Numéro de téléphone"
                  className={phoneClasses}
                  onChange={phoneHandler}
                  onBlur={phoneOnBlur}
                  value={phone}
                />
              </div>
              {phoneHasError && <p>Veuillez entrer votre Telephone</p>}
            </Form.Group>

            <Form.Group controlId="date">
              {!phoneHasError && <Form.Label> </Form.Label>}
              <div className="input-group">
                <span className="input-group-text">
                  <FaCalendarAlt size="1em" color="gray" />
                </span>
                <Form.Control
                  placeholder="Votre date de naissance"
                  type="date"
                  className={dateClasses}
                  value={date}
                  onChange={dateHandler}
                  onBlur={dateOnBlur}
                />
              </div>
              {dateHasError && <p>Veuillez choisir la date de naissance</p>}
            </Form.Group>

            <Form.Group>
              {!dateHasError && <Form.Label htmlFor="password"> </Form.Label>}
              <div className="input-group">
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
                <Form.Control
                  className={passwordClasses}
                  placeholder="mot de passe"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  ref={passwordRef}
                  value={password}
                  onChange={passwordHandler}
                  onBlur={passwordOnBlur}
                />
              </div>
              {passwordHasError && <p>Veuillez entrer votre mot de passe</p>}
            </Form.Group>
            <Form.Group>
              {!passwordHasError && (
                <Form.Label htmlFor="password-confirm"></Form.Label>
              )}
              <div className="input-group">
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
                <Form.Control
                  className={passworConfirmdClasses}
                  placeholder="Confirmer le mot de passe"
                  id="password-confirm"
                  type={showPassword ? "text" : "password"}
                  ref={passwordConfirmRef}
                  value={passwordComfirm}
                  onChange={passwordComfirmHandler}
                  onBlur={passwordComfirmOnBlur}
                />
              </div>
              {passwordComfirmHasError && (
                <p>Veuiller confirmer le mot de passe</p>
              )}
            </Form.Group>
            {!passwordComfirmHasError && <Breadcrumb />}
            <Button className="w-100 mt-3" type="submit"
           >
              {" "}
              Valider{" "}
              
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default SignUp;
