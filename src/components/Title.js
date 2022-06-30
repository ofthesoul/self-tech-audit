import React from "react";
import logo from "../powered_logo.png";

import { Container, Row, Col } from "reactstrap";

export default function Title() {
  return (
    <Container>
      <Row>
        <Col className="mt-5 text-center h-100">
          <p className="display-4 fw-bold">Presenter Technical Audit</p>
          <img src={logo} className="img-fluid" alt="Geniecast logo"></img>
          <div className="mt-5 text-center fs-5">
            To make sure your presentation goes smoothly and lessen the chance
            of hiccups, we have created what we call a "technical audit" which
            will take inventory of your internet connection and computer setup
            to send to our team for record. We will work with you to rectify
            anything that isn't optimal. <br></br>This should only take a
            minute!
          </div>
        </Col>
      </Row>
    </Container>
  );
}
