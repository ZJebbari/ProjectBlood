import React, { useState,useEffect } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/styles.css";
import classes from "./UserBanner.module.css";
import Button from "../../UI/Button";
import { Modal } from "react-bootstrap";

const UserBanner = () => {
    const [donationCount, setDonationCount] = useState(9000);
    const targetCount = 10000;
  const incrementStep = 30;

  const incrementCounter = () => {
    setDonationCount((prevCount) => Math.min(prevCount + incrementStep, targetCount));
  };

  useEffect(() => {
    if (donationCount < targetCount) {
      const interval = setInterval(incrementCounter, 70);
      return () => clearInterval(interval);
    }
  }, [donationCount]);
  return (
    <section
      className={`d-flex justify-content-center align-items-center pt-5 ${classes["banner"]}`}
    >
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-7">
            <h1>RELEVONS LE DÉFI DES <br/>
            <span className={classes.redText}>{donationCount}</span> DONS PAR JOUR !</h1>
          </div>
          <div className="col-md-5 banner-desc lh-lg">
            <ul>
            <br/>
              <li>Une pause solidaire qui nous fait du bien,</li>
              <li>Une heure pour soi, une belle action pour eux,</li>
              <li>Ensemble, engageons-nous pour le don de sang !</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBanner;
