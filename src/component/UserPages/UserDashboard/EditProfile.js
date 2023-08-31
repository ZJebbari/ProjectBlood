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

const EditProfile = () => {
  const initialData = {
    fullName: "John",
    gender: "2",
    ville: "xxxx",
    email: "john@example.com",
    date: "1945-06-15",
    num: "55555555",
    catsang: "Apositif",
  };

  const [fullName, setFullName] = useState(initialData.fullName);
  const [sexe, setGender] = useState(initialData.gender);
  const [city, setVille] = useState(initialData.ville);
  const [date, setDate] = useState(initialData.date);
  const [phone, setNum] = useState(initialData.num);
  const [errorMessage, setErrorMessage] = useState('');
  const [fullNameValidation ,setFullNameValidation]= useState(true);
  const [sexeValidation,setGenderValidation] = useState(true);
  const [cityValidation ,setCityValidation] = useState(true);
  const [phoneValidation,setPhoneValidation] = useState(true);
  const [dateValidation,setDateValidation] = useState(true);
   
  const submitHandler = (event) => {
    event.preventDefault();
    if (!fullName || !sexe || !city || !phone || !date) {
      if (!fullName) setFullNameValidation(false);
      if (!sexe) setGenderValidation(false);
      if (!city) setCityValidation(false);
      if (!phone) setPhoneValidation(false);
      if (!date) setDateValidation(false);
      return;
    }

    // Soumission du formulaire
    setFullNameValidation(true);
    setGenderValidation(true);
    setCityValidation(true);
    setPhoneValidation(true);
    setDateValidation(true);

    // Autres actions à effectuer après la soumission
  };
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCityChange = (event) => {
    setVille(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNum(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

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
             
              {!fullNameValidation &&   (
                <p>Veuillez entrer votre nom complet</p>
              )}
            </Form.Group>

            <Form.Group controlId="sexe">
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
                  <option value="1">Femme</option>
                  <option value="2">Homme</option>
                </select>
              </div>
              { !sexeValidation && <p>Veuillez choisir votre sexe</p>}
            </Form.Group>

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
              { !cityValidation && <p>Veuillez choisir votre lieu</p>}
            </Form.Group>
            <Form.Group controlId="phone">
              { cityValidation &&  <Form.Label> </Form.Label>}
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
              { !phoneValidation && (
                <p>Veuillez entrer votre Telephone</p>
              )}
            </Form.Group>

            <Form.Group controlId="date">
              {  phoneValidation && <Form.Label> </Form.Label>}
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
              { !dateValidation && (
                <p>Veuillez choisir la date de naissance</p>
              )}
            </Form.Group>
            <br/>

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
