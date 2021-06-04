import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const MessageAuth = ({ userName }) => {
  return (
    <Container fluid className="text-center">
      <Row className="d-flex justify-content-center mb-3">
        <h1>Pizzeria Delizioso</h1>
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <h4>
          Witaj <b>{userName}</b>! Zapraszamy do przejrzenia naszego menu, albo
          skomponowania własnej perfekcyjnej pizzy.
        </h4>
      </Row>
      <Row>
        <Col sm={6} className="my-1">
          <Button
            as={Link}
            to="/menu"
            variant="outline-secondary"
            className="w-75"
          >
            Menu
          </Button>
        </Col>
        <Col sm={6} className="my-1">
          <Button
            as={Link}
            to="/history"
            variant="outline-secondary"
            className="w-75"
          >
            Historia zamówień
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MessageAuth;
