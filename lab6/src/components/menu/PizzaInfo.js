import React, { useContext, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Pointer from "./Pointer";
import CartContext from "./cart/CartContext";

const PizzaInfo = ({ pizza }) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sizes] = useState(["Duża 42 cm", "Średnia 32 cm", "Mała 24 cm"]);

  const { content, setContent } = useContext(CartContext);

  const addToCart = () => {
    setContent([
      ...content,
      {
        id: uuidv4(),
        name: pizza.name,
        size: sizes[selectedPrice],
        price: pizza.prices[selectedPrice],
      },
    ]);
  };

  return (
    <Container fluid className="menu-pizza">
      <Row style={{ height: "100%" }}>
        <Col xs={3}>
          <Image src={pizza.url} alt="pizza" />
        </Col>
        <Col xs={6}>
          <Row>
            <h1>{pizza.name}</h1>
          </Row>
          <Row>
            <h5>{`Składniki: ${pizza.ingredients.map((i) => ` ${i}`)}`}</h5>
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
              <p>{`${pizza.prices[0].toFixed(2)} zł`}</p>
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
              <p>{`${pizza.prices[1].toFixed(2)} zł`}</p>
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
              <p>{`${pizza.prices[2].toFixed(2)} zł`}</p>
              <Pointer selected={selectedPrice === 2 ? true : false} />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", marginTop: "15px" }}>
            <Button
              variant="outlined"
              onClick={() => {
                addToCart();
              }}
            >
              <ShoppingCartIcon style={{ marginRight: "5px" }} />
              <h5>{pizza.prices[selectedPrice].toFixed(2)} zł</h5>
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PizzaInfo;
