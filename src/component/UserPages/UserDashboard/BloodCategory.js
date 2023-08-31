import React from "react";
import classes from "./BloodCategory.module.css"; // Assurez-vous que le chemin vers le fichier est correct
import { Container } from "react-bootstrap";

const BloodCategory = ({ selectedCategory }) => {
  console.log({ selectedCategory });
  const bloodGroups = [
    { id: "Apositif", category: "A+" },
    { id: "Bpositif", category: "B+" },
    { id: "Opositif", category: "O+" },
    { id: "ABpositif", category: "AB+" },
    { id: "Anegatif", category: "A-" },
    { id: "Bnegatif", category: "B-" },
    { id: "Onegatif", category: "O-" },
    { id: "ABnegatif", category: "AB-" },
  ];

  return (
    <Container className={classes.container}>
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
    </Container>
  );
};

export default BloodCategory;
