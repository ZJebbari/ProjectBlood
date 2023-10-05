import React from "react";
import classes from "./BloodCategory.module.css"; // Assurez-vous que le chemin vers le fichier est correct
import { Container } from "react-bootstrap";
import bloodGroups from "../../../assets/Data/bloodGroups";

const BloodCategory = ({ selectedCategory }) => {
  console.log({ selectedCategory });
  

  return (
    <  div className={classes.container}>
      <div className={`row row-cols-0 row-cols-lg-4 g-2`}>
        {bloodGroups.map((group) => (
          <div className={`col ${classes["circle-column"]}`} key={group.id}>
            <div
              id={group.id}
              className={`circle-content ${classes["circle-content"]} ${
                selectedCategory === group.id ? classes["circle-red"] : ""
              }`}
            >
              <strong>{group.category}</strong>
            </div>
          </div>
        ))}
      </div>
    </ div>
  );
};

export default BloodCategory;
