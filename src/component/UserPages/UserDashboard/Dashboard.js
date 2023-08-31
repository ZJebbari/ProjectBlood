import React, { useState } from "react"; // Import external dependencies first
import { Container, Row, Col } from "react-bootstrap"; // Import react-bootstrap components
import Profile from "./Profile"; // Import internal components
import EditProfile from "./EditProfile";
import DonationHistory from "./DonationHistory";
import BloodImg from "./BloodImg";
import {
  FaUser,
  FaPencilAlt ,
  FaHistory,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("profile"); // État local pour la page active

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  let pageContent; // Contenu de la page basé sur l'état

  switch (activePage) {
    case "profile":
      pageContent = <Profile />;
      break;
    case "editprofile":
      pageContent = <EditProfile />;
      break;
    case "history":
      pageContent = <DonationHistory />;
      break;
    default:
      pageContent = <Profile />;
  }
  return (
    <div>
      
        <Row className={`  ${classes.row}`}>
          <Col md={2}  className={`  ${classes.colCustom}`}>
            {/* Partie des boutons */}
            <div  className={` d-flex flex-column ${classes.horizontaldiv}  `} >
              <button
                className={`${classes.button} ${classes["learn-more"]}`}
                onClick={() => handlePageChange("profile")}
              >
                <span className={classes.circle}>
                  <span className={`${classes.icon} ${classes.arrow}`}> 
                  <FaUser size="1em" color="white" /> </span>
                </span>
                <span className={classes["button-text"]}>Mon profile</span>
              </button>

              <button
                className={`${classes.button} ${classes["learn-more"]}`}
                onClick={() => handlePageChange("editprofile")}
              >
                <span className={classes.circle}>
                  <span className={`${classes.icon} ${classes.arrow}`}><FaPencilAlt size="1em" color="white" /> </span></span>
                 
                <span className={classes["button-text"]}>&ensp;Modifier mon profile</span>
              </button>

              <button
                className={`${classes.button} ${classes["learn-more"]}`}
                onClick={() => handlePageChange("history")}
              >
                <span className={classes.circle}>
                  <span className={`${classes.icon} ${classes.arrow}`}><FaHistory size="1em" color="white" /> </span>
                </span>
                <span className={classes["button-text"]}>Mon historique</span>
              </button>
              
             
            </div>
          </Col>
          <Col md={10}   className={` banner-desc lh-lg  ${classes.section2}`}>
            
            <Row >
          <Col md={8}  >
          <div className="flex-grow-1 p-3">{pageContent}</div></Col>
          <Col md={4}   className={` ${classes.section3}`}>
            <BloodImg/>
          </Col>
        </Row>
          </Col>
        </Row>
        
    </div>
  );
};

export default Dashboard;
