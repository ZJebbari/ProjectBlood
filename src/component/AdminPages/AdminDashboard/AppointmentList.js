import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import classes from "./AppointmentList.module.css";
import { FaPlus } from "react-icons/fa";
import centers from "../../../assets/Data/centers";
import bloodGroups from "../../../assets/Data/bloodGroups";
import AddTransaction from "./AddTransaction";
import appointmentService from "../../../services/appointment.service";
import centerService from "../../../services/center.service";

function AppointmentList() {
  // Exemple de données pour les centres et les rendez-vous
  const [selectedCenter, setSelectedCenter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [appointment, setAppointment] = useState([]);
  const [centerList, setCenterList] = useState([]);
  const [selectedCenterId, setSelectedCenterId] = useState("");

  useEffect(() => {
    appointmentService.getAllAppointment().then((response) => {
      const formattedData = response.data.map((appointment) => ({
        donorName: appointment.name,
        centerName: appointment.center.centerName,
        date: appointment.appointmentDate,
        id: appointment.id,
      }));
      setAppointment(formattedData);
    });
  }, []);

  useEffect(() => {
    centerService.getAllCenters().then((response) => {
      setCenterList(response.data);
    });
  }, []);

  const handleCenterChange = (selectedOption) => {
    setSelectedCenter(selectedOption);
    setSelectedCenterId(selectedOption ? selectedOption.value : ""); // If there's no selected center, reset the filter.
  };

  const handleAddTransaction = (appointmentId) => {
    // Mettez en œuvre la logique pour ajouter une transaction ici
    setShowModal(true);
    console.log(
      `Ajouter une transaction pour le rendez-vous avec l'ID ${appointmentId}`
    );
  };
  //boite de dialogue
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <p>
        Vous trouverez ci-dessous les rendez-vous de tous les centres de notre
        territoire. Veuillez choisir votre centre pour voir les rendez-vous qui
        vous concernent.
      </p>
      <div className={`${classes.customselect}`}>
        <Select
          options={centerList.map((center) => ({
            value: center.idCenter,
            label: center.centerName,
          }))}
          value={selectedCenter}
          onChange={handleCenterChange}
          placeholder="Choisissez un centre"
        />
      </div>
      <h2 className={`${classes.titre}`}>Liste des rendez-vous :</h2>
      <div className={`${classes.tablesection}`}>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nom du Donneur</th>
              <th>Nom du Centre</th>
              <th>Date du Rendez-vous</th>
              <th>Ajouter Transaction</th>
            </tr>
          </thead>
          <tbody>
            {appointment
              .filter(
                (app) =>
                  !selectedCenterId || app.centerName === selectedCenter.label
              )
              .map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.donorName}</td>
                  <td>{appointment.centerName}</td>
                  <td>{appointment.date}</td>
                  <td>
                    <button
                      className={`${classes.button}`}
                      onClick={() => handleAddTransaction(appointment.id)}
                    >
                      <span className={`${classes.button__text}`}>
                        Ajouter{" "}
                      </span>
                      <span className={`${classes.button__icon}`}>
                        <FaPlus size="1em" color="white" />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remplir les champs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTransaction />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default AppointmentList;
