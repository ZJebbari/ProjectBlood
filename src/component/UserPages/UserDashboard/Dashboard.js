import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Profile from './Profile';
import classes from "./Dashboard.module.css";
import HeaderUser from '../HeaderUser';
const Dashboard = () => {
  return (
    <div >
       <Container className="text-center">
        <Row>
          <Col>
            1 of 2
          </Col>
          <Col>
            2 of 2
          </Col>
        </Row>
      </Container>
       
     
     
    </div>
  );
}

export default Dashboard;
