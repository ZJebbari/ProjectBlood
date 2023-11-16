import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../../../UI/Button";
import centers from "../../../assets/Data/centers";
import Select from "react-select";
import bloodGroups from "../../../assets/Data/bloodGroups";
import classes from "./AddTransaction.module.css";

function EditStock() {
  const [formData, setFormData] = useState({
    center: null,
    bloodGroup: null,
    action: null,
    quantity: "",
  });

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    // Mettez ici le code pour traiter les données (par exemple, envoyer à un serveur, effectuer des calculs, etc.)
    console.log("Formulaire soumis avec les données :", formData);
  };

  return (
    <div>
      <h2>Modifier le Stock</h2>
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
        <Form.Group controlId="formbloodGroup">
          <Form.Label className={`${classes.label}`}>
            Groupes sanguins{" "}
          </Form.Label>
          <Select
            options={bloodGroups.map((blood) => ({
              value: blood.id,
              label: blood.category,
            }))}
            value={formData.bloodGroup}
            onChange={(selectedOption) =>
              handleChange({
                target: {
                  name: "bloodGroup",
                  value: formData.bloodGroup.value,
                },
              })
            }
            placeholder="Précisez le groupe"
          />
        </Form.Group>
        <Form.Group controlId="formAction">
          <Form.Label className={`${classes.label}`}>Action</Form.Label>
          <Select
            options={[
              { value: "depot", label: "Dépôt" },
              { value: "retrait", label: "Retrait" },
            ]}
            value={formData.action}
            onChange={(selectedOption) =>
              handleChange({
                target: { name: "action", value: formData.action.value },
              })
            }
            placeholder="Sélectionnez une action"
          />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label className={`${classes.label}`}>
            Quantité de sang donnée (Gramme)
          </Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
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

export default EditStock;
