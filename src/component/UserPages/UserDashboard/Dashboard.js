import React, { useState } from "react"; // Import external dependencies first
import {  Modal, Row, Col } from "react-bootstrap"; // Import react-bootstrap components
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
  FaTrash,
} from "react-icons/fa";
import classes from "./Dashboard.module.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [activePage, setActivePage] = useState("profile"); // État local pour la page active
  const currentUser = useSelector((state) => state.user);

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  const handleDeleteButtonClick = () => {
    setShowConfirmationDialog(true);
  }
  const handleConfirmDelete = () => {
    // Mettez ici le code pour supprimer le compte
    setShowConfirmationDialog(false); // Fermer la boîte de dialogue après confirmation
  }

  const handleCancelDelete = () => {
    setShowConfirmationDialog(false); // Fermer la boîte de dialogue si annulé
  }

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
      <div className={` ${classes.entete}`}>
        <h2><spam>"</spam> Votre don de sang : une goutte d'espoir qui peut guider quelqu'un vers la lumière.
        <spam>"</spam>  </h2>
      </div>
      
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
              <button
                className={`${classes.button} ${classes["learn-more"]}`}
                onClick={handleDeleteButtonClick}
              >
                <span className={classes.circle}>
                  <span className={`${classes.icon} ${classes.arrow}`}><FaTrash size="1em" color="white" /> </span>
                </span>
                <span className={classes["button-text"]}>Supprimer mon compte</span>
              </button>
             
            </div>
          </Col>
          <Col md={10}   className={` banner-desc lh-lg  ${classes.section2}`}>
            
            <Row >
          <Col md={8}  >
          <div className="flex-grow-1 p-3">{pageContent}</div>
          </Col>
          <Col md={4}   className={` ${classes.section3}`}>
            
            <BloodImg/>
          </Col>
        </Row>
          </Col>
          
        </Row>
 <Modal  show={showConfirmationDialog} onHide={handleCancelDelete}
 >
  <Modal.Header   closeButton>
    <Modal.Title className={`${classes.modaltitre}`} ><FaTrash size="1em" color="black" /> 
    <b> Confirmation de la suppression</b></Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p className={`${classes.modaltext}`}>Voulez-vous vraiment supprimer votre compte ?</p>
  </Modal.Body>
  <Modal.Footer className={`${classes.modalfooter}`}>
    <button  className={`${classes.modalbuttonannuler}`} onClick={handleCancelDelete}>
    <b>Annuler</b>
    </button>
    <button className={`${classes.modalbuttonsup}`} onClick={handleConfirmDelete}>
      <b>Supprimer</b>
    </button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default Dashboard;
