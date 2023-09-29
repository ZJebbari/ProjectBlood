import React, { useState } from "react";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./StockView.module.css";
import regions from "../../../assets/Data/regions";
import bloodGroups from "../../../assets/Data/bloodGroups";
import data from "../../../assets/Data/data";
import CarteSangMaroc from "./CarteSangMaroc";

function StockView() {
  const [selectedCenter, setSelectedCenter] = useState("");
  const handleCenterChange = (selectedOption) => {
    setSelectedCenter(selectedOption);
    console.log(selectedOption);
  };
  return (
    <>
      <div className={`${classes.CarteSang}`}>
        <h3>Affichage du stock disponible sous forme d'une carte</h3>
      <CarteSangMaroc/></div>
      <div>
        <p>Veuillez sélectionner la région souhaitée pour consulter les quantités de sang disponibles pour chaque région et chaque groupe sanguin</p>
        <h3>choisisez la region</h3>
        <Select
          options={ regions.map(( region) => ({
            value: region.id,
            label: region.nom,
          }))}
          value={selectedCenter}
          onChange={handleCenterChange}
          placeholder="Choisissez un centre"
        />
        <Row className={`${classes.section1}`}>
          <Col md={8}>
            <div className={`${classes.section2}`}>
              <div className={`${classes.tablesection}`}>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Nom du Centre</th>
                      <th>Groupes sanguins</th>
                      <th>Quantite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((d) => (
                      <tr key={d.id}>
                        <td>{d.nomCentre}</td>
                        <td>{d.groupesSanguins}</td>
                        <td>{d.quantite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={`${classes.section3}`}>
            <h6>les quantités de sang disponibles pour chaque groupe sanguin</h6>
        
              {bloodGroups.map((group) => (
                <button key={group.id} className={`${classes.button}`}>
                  <span className={`${classes.button__text1}`}>
                    {group.category}
                  </span>
                  <span className={`${classes.button__text2}`}>
                    {group.quantity}
                  </span>
                </button>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StockView;
