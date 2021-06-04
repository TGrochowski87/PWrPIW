import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Pointer from "./Pointer";

const ComposeBlock = ({
  setComposing,
  setCompozingSize,
  setCompozingPrice,
}) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sizes] = useState(["Duża 42 cm", "Średnia 32 cm", "Mała 24 cm"]);

  const [prices] = useState([46.4, 39.4, 27.2]);

  return (
    <Container fluid className="menu-pizza">
      <Row style={{ height: "100%" }}>
        <Col xs={3}>
          <img
            src="https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"
            alt="pizza"
          />
        </Col>
        <Col xs={6}>
          <Row>
            <h1>Proprio</h1>
          </Row>
          <Row>
            <h5>Składniki: co tam wybierzesz ;)</h5>
          </Row>
        </Col>
        <Col xs={3} style={{ padding: "1.5rem 0" }}>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedPrice(0);
            }}
          >
            <Col xs={7}>
              <p>Duża 42 cm</p>
            </Col>
            <Col xs={5}>
              <p>{`${prices[0].toPrecision(4)} zł`}</p>
              <Pointer selected={selectedPrice === 0 ? true : false} />
            </Col>
          </Row>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedPrice(1);
            }}
          >
            <Col xs={7}>
              <p>Średnia 32 cm</p>
            </Col>
            <Col xs={5}>
              <p>{`${prices[1].toPrecision(4)} zł`}</p>
              <Pointer selected={selectedPrice === 1 ? true : false} />
            </Col>
          </Row>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedPrice(2);
            }}
          >
            <Col xs={7}>
              <p>Mała 24 cm</p>
            </Col>
            <Col xs={5}>
              <p>{`${prices[2].toPrecision(4)} zł`}</p>
              <Pointer selected={selectedPrice === 2 ? true : false} />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", marginTop: "15px" }}>
            <Button
              variant="outlined"
              onClick={() => {
                setCompozingSize(sizes[selectedPrice]);
                setCompozingPrice(prices[selectedPrice]);
                setComposing(true);
              }}
            >
              <ShoppingCartIcon style={{ marginRight: "5px" }} />
              <h5>{prices[selectedPrice].toPrecision(4)} zł</h5>
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ComposeBlock;
