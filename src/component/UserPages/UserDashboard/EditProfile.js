import React, { useEffect, useState } from "react";
import { Form, Card, Alert, Breadcrumb } from "react-bootstrap";
import Button from "../../../UI/Button";
import { MdEmail } from "react-icons/md";
import {
  FaUser,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import classes from "./EditProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import UserServices from "../../../services/user.services";
import User from "../../../models/user";
import { clearCurrentUser } from "../../../store/actions/user";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const currentUser = useSelector((state) => state.user);

  const initialData = {
    fullName: currentUser.name,
    gender: currentUser.gender,
    ville: currentUser.city,
    email: currentUser.email,
    date: currentUser.date,
    num: currentUser.phone,
    catsang: "Apositif",
  };

  const [fullName, setFullName] = useState(initialData.fullName);
  const [sexe, setGender] = useState(initialData.gender);
  const [city, setVille] = useState(initialData.ville);
  const [date, setDate] = useState(initialData.date);
  const [phone, setNum] = useState(initialData.num);
  const [errorMessage, setErrorMessage] = useState("");
  const [fullNameValidation, setFullNameValidation] = useState(true);
  const [sexeValidation, setGenderValidation] = useState(true);
  const [cityValidation, setCityValidation] = useState(true);
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [dateValidation, setDateValidation] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!fullName || !city || !phone) {
      if (!fullName) setFullNameValidation(false);
      // if (!sexe) setGenderValidation(false);
      if (!city) setCityValidation(false);
      if (!phone) setPhoneValidation(false);
      // if (!date) setDateValidation(false);
      return;
    }

    const user = new User(
      fullName,
      currentUser.gender,
      city,
      phone,
      currentUser.date,
      currentUser.username,
      currentUser.password,
      currentUser.role,
      currentUser.token,
      currentUser.id
    );
    console.log(user.name); // Now it should log the name correctly

    UserServices.update(user)
      .then((response) => {
        // Handle a successful update, e.g., show a success message
        console.log("Profile updated successfully.");
        // Dispatch actions after a successful update
        dispatch(clearCurrentUser());
        navigate("/");
      })
      .catch((error) => {
        // Handle errors, including 405 errors
        console.error(
          "Request failed with status code " + error.response?.status
        );
        // You may want to display an error message to the user
      });

    // Reset form validation states
    setFullNameValidation(true);
    // setGenderValidation(true);
    setCityValidation(true);
    setPhoneValidation(true);
    // setDateValidation(true);

    // Other actions to perform after submission
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  // const handleGenderChange = (event) => {
  //   setGender(event.target.value);
  // };

  const handleCityChange = (event) => {
    setVille(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNum(event.target.value);
  };

  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  // };

  return (
    <div>
      <h2>Modifier le Profil</h2>
      <Card>
        <Card.Body>
          <h6 className="text-center mb-4">Veuillez remplir le formulaire</h6>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="fullName">
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser size="1em" color="gray" />
                </span>
                <Form.Control
                  type="text"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>

              {!fullNameValidation && <p>Veuillez entrer votre nom complet</p>}
            </Form.Group>

            {/* <Form.Group controlId="sexe">
              {fullNameValidation && <Form.Label> </Form.Label>}
              <div className="input-group">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  <FaMale size="1em" color="gray" />
                </label>
                <select
                  id="inputGroupSelect01"
                  value={sexe}
                  onChange={handleGenderChange}
                >
                  <option value="Genre" className="text-muted">
                    Genre
                  </option>
                  <option value="Femme">Femme</option>
                  <option value="Homme">Homme</option>
                </select>
              </div>
              {!sexeValidation && <p>Veuillez choisir votre sexe</p>}
            </Form.Group> */}

            <Form.Group controlId="city">
              {sexeValidation && <Form.Label> </Form.Label>}
              <div className="input-group">
                <span className="input-group-text">
                  <FaMapMarkerAlt size="1em" color="gray" />
                </span>
                <Form.Control
                  type="text"
                  value={city}
                  onChange={handleCityChange}
                />
              </div>
              {!cityValidation && <p>Veuillez choisir votre lieu</p>}
            </Form.Group>
            <Form.Group controlId="phone">
              {cityValidation && <Form.Label> </Form.Label>}
              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone size="1em" color="gray" />
                </span>
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              {!phoneValidation && <p>Veuillez entrer votre Telephone</p>}
            </Form.Group>

            {/* <Form.Group controlId="date">
              {phoneValidation && <Form.Label> </Form.Label>}
              <div className="input-group">
                <span className="input-group-text">
                  <FaCalendarAlt size="1em" color="gray" />
                </span>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </div>
            </Form.Group>
            <br /> */}

            <Button className="w-100 mt-3" type="submit">
              {" "}
              Valider{" "}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditProfile;
