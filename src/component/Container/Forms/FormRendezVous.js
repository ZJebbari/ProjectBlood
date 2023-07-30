import React from "react";
 
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

const FormRendezVous = () => {
  return (
    <section  className={` py-5 ${classes["order-form"]}`}
    >
      <div className="container formcolor">
      <Card>
        <h2 className="merriweather text-center text-light mb-4">
          Prendre rendez-vous
        </h2>
        <form>
          <div className="row ">
            <div className="col-md-6 col-sm">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  {" "}
                  <FaUser size="1em" color="gray" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom complet"
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
                <select className="form-select" id="inputGroupSelect01">
                  <option className="text-muted">Genre</option>
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
                <select className="form-select" id="inputGroupSelect02">
                  <option className="text-muted">Trouver un lieu de don</option>
                  <option value="1">Moins de 4</option>
                  <option value="2">Entre 4 et 8</option>
                  <option value="3">Entre 8 et 12</option>
                  <option value="4">Plus de 12</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-sm">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                />
                <span className="input-group-text">
                  <MdEmail size="1em" color="gray" />
                </span>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numéro de téléphone"
                />
                <span className="input-group-text">
                  <FaPhone size="1em" color="gray" />
                </span>
              </div>
              <div className="input-group mb-3">
                <input type="date" className="form-control" />
                <span className="input-group-text">
                  <FaCalendarAlt size="1em" color="gray" />
                </span>
              </div>
            </div>
            <div class="row">
              <div className="input-group mb-3 d-flex justify-content-center">
              <Button
                   
                  >
                    CONFIRMEZ VOTRE RENDEZ-VOUS
                  </Button>
              </div>
            </div>
          </div>
        </form>
        </Card>
      </div>
    </section>
  );
};


export default FormRendezVous;
