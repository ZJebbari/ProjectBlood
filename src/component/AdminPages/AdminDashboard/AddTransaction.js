import React, { useState } from "react";
import {  Form } from "react-bootstrap";
import Button from '../../../UI/Button';
import centers from "../../../assets/Data/centers";
import Select from "react-select";
import bloodGroups from "../../../assets/Data/bloodGroups";
import classes from './AddTransaction.module.css';

function AddTransaction(props) {
  const [formData, setFormData] = useState({
    center: "",
    quantity: "",
    date: "",
    bloodGroup: "",
    pdfFile: null,
  });
  ////////////////////////
  //boite de dialogue
  //////////////////

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pdfFile: e.target.files[0],
    });
  };
  const handleSubmit = () => {
    // Gérez ce que vous souhaitez faire avec les données ici
    console.log(formData);
    props.onHide();
  };
  return (
    <div>
      <h3>Ajouter transaction</h3>
      <Form>
        <Form.Group controlId="formcenter">
          <Form.Label className={`${classes.label}`}>Nom du center </Form.Label>
          <Select
            options={centers.map((center) => ({
              value: center.id,
              label: center.name,
            }))}
            value={formData.center}
            onChange={(selectedOption) =>
              handleChange({
                target: { name: "center", value: formData.center.value },
              })
            }
            placeholder="Choisissez un centre"
          />
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label className={`${classes.label}`}>Quantité de sang donnée</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label className={`${classes.label}`}>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formbloodGroup">
          <Form.Label className={`${classes.label}`}>Groupes sanguins </Form.Label>
          <Select
            options={bloodGroups.map((blood) => ({
              value: blood.id,
              label: blood.category,
            }))}
            value={formData.bloodGroup}
            onChange={(selectedOption) =>
              handleChange({
                target: { name: "bloodGroup", value: formData.bloodGroup.value },
              })
            }
            placeholder="Précisez le groupe"
          />
        </Form.Group>
        <Form.Group controlId="formPdfFile">
          <Form.Label className={`${classes.label}`}> Résultat du test (Fichier PDF)</Form.Label>
          <Form.Control
            type="file"
            name="pdfFile"
            onChange={handleFileChange}
          />
        </Form.Group>
        <div className={`${classes.divbtn}`}>
        <Button  className={`${classes.btn}`}  onClick={handleSubmit}>
          Enregistrer
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTransaction;
