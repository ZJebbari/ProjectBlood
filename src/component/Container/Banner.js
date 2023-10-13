import React, { useState,useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/styles.css";
import classes from "./Banner.module.css";
import Button from "../../UI/Button";
import { Modal } from "react-bootstrap";
import SignUp from "./Forms/SignUp";
const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (showModal2) {
      setProgress(0); // Réinitialiser la valeur de progress à 0
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 40);
  
      return () => clearInterval(interval);
    }
  }, [showModal2]);
  
  
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setProgress(0);
  };
  const ValiderForm = () => {
    setShowModal2(true);
    setProgress(0);
    setTimeout(() => {
      setShowModal2(false);
      
    }, 5000); 
  
     
  };
  
  return (
    <section
      className={`d-flex justify-content-center align-items-center pt-5 ${classes["banner"]}`}
    >
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 banner-desc lh-lg">
            <h1 className="text-capitalize py-3 redressed">
              REJOIGNEZ-NOUS <br />
              DEVENEZ DONNEUR!
            </h1>
            <p>
              <Button onClick={openModal}>Je cree un compte</Button>
            </p>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <SignUp closeModal={closeModal}
           ValiderForm={ValiderForm} />{" "}
          {/* Pass the closeModal function as prop */}
        </Modal.Body>
      </Modal>
      <Modal show={showModal2} onHide={closeModal}>
        <Modal.Body>
        <ProgressBar variant="success" now={progress} />
        <h5>
        Votre demande a été enregistrée avec succès. </h5>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Banner;
