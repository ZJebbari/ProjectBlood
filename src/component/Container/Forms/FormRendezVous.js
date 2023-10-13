import React, { useEffect, useState } from "react";

import classes from "./FormRendezVous.module.css";
import {
  FaUser,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Card from "../../../UI/Card";
import Button from "../../../UI/Button";
import useInput from "../../hooks/use-input";
import appointmentService from "../../../services/appointment.service";
import Appoitment from "../../../models/appointment";
import { useSelector } from "react-redux";
import AppoitmentNoId from "../../../models/appointmentNoId";
import CenterService from "../../../services/center.service";
const FormRendezVous = () => {
  const {
    value: fullName,
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
    value: location,
    isValid: enteredLocationIsValid,
    hasError: locationHasError,
    valueHandler: locationHandler,
    inputBlurHandler: locationOnBlur,
    reset: locationReset,
  } = useInput(
    (value) => value.trim() !== "Trouver un lieu de don" && value.trim() !== ""
  );
  const {
    value: email,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueHandler: emailHandler,
    inputBlurHandler: emailOnBlur,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
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

  const [appointment, setAppointment] = useState(
    new Appoitment("", "", "", "", "", "")
  );

  const [sent, setSent] = useState(false);
  const [centerList, setCenterList] = useState([]);
  const [selectedCenterId, setSelectedCenterId] = useState("");

  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    CenterService.getAllCenters().then((response) => {
      setCenterList(response.data);
    });
  }, []);

  useEffect(() => {
    let timer;
    if (sent) {
      timer = setTimeout(() => {
        setSent(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [sent]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !enteredFullNameIsValid ||
      !enteredSexeIsValid ||
      !enteredLocationIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneIsValid ||
      !enteredDateIsValid
    ) {
      return;
    }

    if (!currentUser || currentUser.id === null) {
      const submitAppointment = new AppoitmentNoId(
        date,
        email,
        fullName,
        sexe,
        phone,
        location
      );
      appointmentService.saveAppointmentNoId(submitAppointment);
    } else {
      const submitAppointment = new Appoitment(
        date,
        email,
        fullName,
        sexe,
        phone,
        currentUser.id,
        location
      );
      appointmentService.saveAppointment(submitAppointment);
    }

    setSent(true);

    fullNameReset();
    sexeReset();
    locationReset();
    emailReset();
    phoneReset();
    dateReset();
  };

  const fullNameClasses = fullNameHasError
    ? `${classes.invalid} form-control` // Add only the invalid class
    : "form-control";

  const sexeClasses = sexeHasError
    ? `${classes.invalid} form-select `
    : "form-select";
  const locationClasses = locationHasError
    ? `${classes.invalid} form-select`
    : "form-select ";
  const emailClasses = emailHasError ? classes.invalid : "";
  const phoneClasses = phoneHasError ? classes.invalid : "";
  const dateClasses = dateHasError ? classes.invalid : "";
  return (
    <section id="formRendezVous" className={`py-5 ${classes["order-form"]}`}>
      <div className="container formcolor">
        <Card>
          <h2 className="merriweather text-center text-light mb-4">
            Prendre rendez-vous
          </h2>
          <form onSubmit={submitHandler}>
            <div className="row ">
              <div className="col-md-6 col-sm">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    {" "}
                    <FaUser size="1em" color="gray" />
                  </span>

                  <input
                    type="text"
                    className={fullNameClasses}
                    placeholder="Votre nom complet"
                    onChange={fullNameHandler}
                    onBlur={fullNameOnBlur}
                    value={fullName}
                  />
                </div>
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    {" "}
                    <FaMale size="1em" color="gray" />
                  </label>
                  <select
                    className={` ${sexeClasses}`}
                    id="inputGroupSelect01"
                    value={sexe}
                    onChange={sexeHandler}
                    onBlur={sexeOnBlur}
                  >
                    <option value="Genre" className="text-muted">
                      Genre
                    </option>
                    <option value="1">Femme</option>
                    <option value="2">Homme</option>
                  </select>
                </div>
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect02"
                  >
                    <FaMapMarkerAlt size="1em" color="gray" />
                  </label>
                  <select
                    className={`${locationClasses}`}
                    id="inputGroupSelect02"
                    value={location}
                    onChange={locationHandler}
                    onBlur={locationOnBlur}
                  >
                    <option value="" className="text-muted">
                      Trouver un lieu de don
                    </option>
                    {centerList.map((center) => (
                      <option key={center.idCenter} value={center.idCenter}>
                        {center.city} - {center.centerName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-sm">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className={`form-control ${emailClasses}`}
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={emailHandler}
                    onBlur={emailOnBlur}
                  />
                  <span className="input-group-text">
                    <MdEmail size="1em" color="gray" />
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className={`form-control ${phoneClasses}`}
                    placeholder="Numéro de téléphone"
                    value={phone}
                    onChange={phoneHandler}
                    onBlur={phoneOnBlur}
                  />
                  <span className="input-group-text">
                    <FaPhone size="1em" color="gray" />
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    className={`form-control ${dateClasses}`}
                    value={date}
                    onChange={dateHandler}
                    onBlur={dateOnBlur}
                  />
                  <span className="input-group-text">
                    <FaCalendarAlt size="1em" color="gray" />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3 d-flex justify-content-center">
                  <Button>CONFIRMEZ VOTRE RENDEZ-VOUS</Button>
                </div>
              </div>
            </div>
          </form>
          {sent && (
            <h3 style={{ color: "green" }}>
              Votre demande de rendez-vous a ete traitee avec succes
            </h3>
          )}
          <div className={classes.errorMessages}>
            {fullNameHasError && <p>Veuillez entrer votre nom complet</p>}
            {sexeHasError && <p>Veuillez choisir votre sexe</p>}
            {locationHasError && <p>Veuillez choisir votre lieu</p>}
            {emailHasError && <p>Veuillez entrer votre E-mail</p>}
            {phoneHasError && <p>Veuillez entrer votre Telephone</p>}
            {dateHasError && <p>Veuillez choisir la date</p>}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FormRendezVous;
