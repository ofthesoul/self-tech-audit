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
        </Col>
      </Row>
    </Container>
  );
}
