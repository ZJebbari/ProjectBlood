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
            <p>
              <span>
                <FaUser size="1em" color="white" /> : &emsp;
              </span>
              {userData.firstName}
            </p>
          </div>
          <Container>
            <p>
              <span>
                <MdEmail size="1em" color="black" /> : &emsp;
              </span>
              {userData.email}
            </p>
            <p>
              <span>
                <FaCalendarAlt size="1em" color="black" /> : &emsp;
              </span>
              {userData.date}
            </p>
            <p>
              <span>
                <FaMapMarkerAlt size="1em" color="black" /> : &emsp;
              </span>
              {userData.ville}
            </p>
            <p>
              <span>
                <FaPhone size="1em" color="black" /> : &emsp;
              </span>
              {userData.num}
            </p>
            <h5>Catégorie sanguine :</h5>
            <BloodCategory selectedCategory={userData.catsang} />
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
