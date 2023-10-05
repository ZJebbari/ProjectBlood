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
import { useSelector } from "react-redux";
const Profile = () => {
  const currentUser = useSelector((state) => state.user);
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
              {currentUser.name}
            </h4>
          </div>
          <Container>
            <div className={classes.card2}>
              <h5>
                <span>
                  <MdEmail size="1em" color="black" /> : &emsp;
                </span>
                {currentUser.username}
              </h5>
              <h5>
                <span>
                  <FaCalendarAlt size="1em" color="black" /> : &emsp;
                </span>
                {currentUser.date}
              </h5>
              <h5>
                <span>
                  <FaMapMarkerAlt size="1em" color="black" /> : &emsp;
                </span>
                {currentUser.city}
              </h5>
              <h5>
                <span>
                  <FaPhone size="1em" color="black" /> : &emsp;
                </span>
                {currentUser.phone}
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
