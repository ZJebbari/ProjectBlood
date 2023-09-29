import React from "react";
import classes from "./Profile.module.css";
import { Container } from "react-bootstrap";
import BloodCategory from "./BloodCategory";
import {
  FaUser,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Profile = () => {
  // Simulated user data
  const userData = {
    firstName: "John",
    lastName: "Doe",
    ville: "xxxx",
    email: "john@example.com",
    date: "15-06-1945",
    num: "55555555",
    catsang: "Apositif",
  };

  return (
    <div>
      <h2 className={classes.centerText}>Mon Profile</h2>
      <Container>
        <div className={classes.card}>
          <div className={classes.entete}>
            <h4>
              <span>
                <FaUser size="1em" color="white" /> : &emsp;
              </span>
              {userData.firstName}
            </h4>
          </div>
          <Container>
          <div className={classes.card2}>
            <h5>
              <span>
                <MdEmail size="1em" color="black" /> : &emsp;
              </span>
              {userData.email}
            </h5>
            <h5>
              <span>
                <FaCalendarAlt size="1em" color="black" /> : &emsp;
              </span>
              {userData.date}
            </h5>
            <h5>
              <span>
                <FaMapMarkerAlt size="1em" color="black" /> : &emsp;
              </span>
              {userData.ville}
            </h5>
            <h5>
              <span>
                <FaPhone size="1em" color="black" /> : &emsp;
              </span>
              {userData.num}
            </h5>
            <h5>Catégorie sanguine :</h5>
            
            <BloodCategory selectedCategory={userData.catsang} />
           

            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
