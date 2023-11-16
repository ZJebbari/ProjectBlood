import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../../../UI/Button";
import centers from "../../../assets/Data/centers";
import Select from "react-select";
import bloodGroups from "../../../assets/Data/bloodGroups";
import classes from "./AddTransaction.module.css";
import bloodGroupService from "../../../services/bloodGroup.service";
import centerService from "../../../services/center.service";

function AddTransaction(props) {
  const [formData, setFormData] = useState({
    center: "",
    quantity: "",
    date: "",
    bloodGroup: "",
    pdfFile: null,
  });

  const [bloodGroup, setBloodGroup] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [centerList, setCenterList] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState("");

  useEffect(() => {
    bloodGroupService.getAllBloodGroup().then((response) => {
      setBloodGroup(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    centerService.getAllCenters().then((response) => {
      setCenterList(response.data);
    });
  }, []);

  console.log(bloodGroup.bloodType);
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

  const changeHandler = (e) => {
    setSelectedValue(e.value.target);
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
            options={centerList.map((center) => ({
              value: center.idCenter,
              label: center.centerName,
            }))}
            value={selectedValue}
            onChange={changeHandler}
            placeholder="Choisissez un centre"
          />
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label className={`${classes.label}`}>
            Quantité de sang donnée
          </Form.Label>
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
          <Form.Label className={`${classes.label}`}>
            Groupes sanguins{" "}
          </Form.Label>
          <Select
            options={bloodGroup.map((blood) => ({
              value: blood.bloodGroupId,
              label: blood.bloodType,
            }))}
            value={bloodGroup.bloodGroupId}
            onChange={changeHandler}
            placeholder="Précisez le groupe"
          ></Select>
        </Form.Group>
        <Form.Group controlId="formPdfFile">
          <Form.Label className={`${classes.label}`}>
            {" "}
            Résultat du test (Fichier PDF)
          </Form.Label>
          <Form.Control
            type="file"
            name="pdfFile"
            onChange={handleFileChange}
          />
        </Form.Group>
        <div className={`${classes.divbtn}`}>
          <Button className={`${classes.btn}`} onClick={handleSubmit}>
            Enregistrer
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTransaction;
