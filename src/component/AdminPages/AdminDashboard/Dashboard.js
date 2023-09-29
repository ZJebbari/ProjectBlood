import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppointmentList from "./AppointmentList"; // Importez le composant AppointmentList
import AddTransaction from "./AddTransaction"; // Importez le composant AddTransaction
import StockView from "./StockView"; // Importez le composant StockView
import EditStock from "./EditStock";
import {
  FaUser,
  FaPencilAlt ,
  
  FaFlask,
  FaShoppingCart, // Icône pour le stock
  FaCalendarCheck, // Icône pour les rendez-vous
  
} from "react-icons/fa";
import classes from "./Dashboard.module.css"

const  Dashboard = () => {
  const [activePage, setActivePage] = useState("appointmentList"); // Modifiez la page active par défaut

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  let pageContent;

  switch (activePage) {
    case "appointmentList":
      pageContent = <AppointmentList />;
      break;
    case "addTransaction":
      pageContent = <AddTransaction />;
      break;
    case "stockView":
      pageContent = <StockView />;
      break;
      case "editStock":
      pageContent = <EditStock />;
      break;
    default:
      pageContent = <AppointmentList />;
  }
  return (
    <div>
      
      <Row className={`  ${classes.row}`}>
        <Col md={2}  className={`  ${classes.colCustom}`}>
          <div  className={` d-flex flex-column ${classes.horizontaldiv}  `} >
            <button
              className={`${classes.button} ${classes["learn-more"]}`}
              onClick={() => handlePageChange("appointmentList")} // Mettez à jour avec "appointmentList"
            >
              <span className={classes.circle}>
                <span className={`${classes.icon} ${classes.arrow}`}>
                  <FaCalendarCheck size="1em" color="white" />
                </span>
              </span>
              <span className={classes["button-text"]}>Voir les rendez-vous</span>
            </button>
 {/* <button
              className={`${classes.button} ${classes["learn-more"]}`}
              onClick={() => handlePageChange("addTransaction")} // Mettez à jour avec "addTransaction"
            >
              <span className={classes.circle}>
                <span className={`${classes.icon} ${classes.arrow}`}>
                  <FaPencilAlt size="1em" color="white" />
                </span>
              </span>
              <span className={classes["button-text"]}>&ensp;Ajouter une transaction</span>
            </button> */}
            

            <button
              className={`${classes.button} ${classes["learn-more"]}`}
              onClick={() => handlePageChange("stockView")} // Mettez à jour avec "stockView"
            >
              <span className={classes.circle}>
                <span className={`${classes.icon} ${classes.arrow}`}>
                  <FaFlask size="1em" color="white" />
                </span>
              </span>
              <span className={classes["button-text"]}>Voir le stock</span>
            </button>
            <button
              className={`${classes.button} ${classes["learn-more"]}`}
              onClick={() => handlePageChange("editStock")} // Mettez à jour avec "stockView"
            >
              <span className={classes.circle}>
                <span className={`${classes.icon} ${classes.arrow}`}>
                  <FaFlask size="1em" color="white" />
                </span>
              </span>
              <span className={classes["button-text"]}>Modifiez le stock</span>
            </button>
          </div>
        </Col>
        <Col md={10}   className={` banner-desc lh-lg  ${classes.section2}`}>
            
              <div className="flex-grow-1 p-3">{pageContent}</div>
            
        </Col>
      </Row>
    </div>
  );
};

export default  Dashboard;
