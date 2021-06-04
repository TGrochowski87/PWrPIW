import React, { useState, useContext } from "react";

import { Form, Button } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { v4 as uuidv4 } from "uuid";

import CartContext from "./cart/CartContext";

const ComposeWindow = ({
  composing,
  setComposing,
  composingSize,
  composingPrice,
}) => {
  const [switchStatus, setSwitchStatus] = useState({
    sauce: true,
    dough: true,
  });

  const [ingredients, setIngredients] = useState([
    { name: "salami", checked: false },
    { name: "oregano", checked: false },
    { name: "kurczak", checked: false },
    { name: "boczek", checked: false },
    { name: "szynka", checked: false },
    { name: "bazylia", checked: false },
    { name: "rukola", checked: false },
    { name: "oliwki", checked: false },
    { name: "pieczarki", checked: false },
    { name: "jalapeno", checked: false },
    { name: "pomidor", checked: false },
  ]);

  const [extraSauce, setExtraSauce] = useState("Brak");

  const { content, setContent } = useContext(CartContext);

  const addToCart = () => {
    const chosenIngredients = ingredients
      .filter((i) => i.checked)
      .map((i) => i.name);

    setContent([
      ...content,
      {
        id: uuidv4(),
        name: "Proprio",
        size: composingSize,
        price: composingPrice,
        ingredients: chosenIngredients,
        sauceType: switchStatus.sauce ? "łagodny" : "ostry",
        doughType: switchStatus.dough ? "grube" : "cienkie",
        extraSauce: extraSauce,
      },
    ]);
  };

  return (
    <>
      <div
        className="compose-active"
        style={composing ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setComposing(false);
        }}
      ></div>
      <div
        className="compose"
        style={composing ? { display: "block" } : { display: "none" }}
      >
        <Form>
          <h4>Ingredients</h4>
          <hr />
          <div className="ingredients-chooser">
            {ingredients.map((i, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={i.name}
                checked={i.checked}
                onChange={() => {
                  const newIngredients = ingredients.map((ing) => {
                    if (ing === i) {
                      return { ...ing, checked: !ing.checked };
                    }

                    return ing;
                  });

                  setIngredients(newIngredients);
                }}
              />
            ))}
          </div>
          <hr />
          <div className="ingredients-chooser-switches">
            <div>
              <Form.Label style={{ marginRight: "10px" }}>sos ostry</Form.Label>
              <Form.Check
                inline
                id="switch1"
                type="switch"
                label="sos łagodny"
                checked={switchStatus.sauce}
                onChange={() => {
                  setSwitchStatus({
                    ...switchStatus,
                    sauce: !switchStatus.sauce,
                  });
                }}
              />
            </div>
            <div>
              <Form.Label style={{ marginRight: "10px" }}>
                ciasto ciękie
              </Form.Label>
              <Form.Check
                inline
                className="test"
                id="switch2"
                type="switch"
                label="ciasto grube"
                checked={switchStatus.dough}
                onChange={() => {
                  setSwitchStatus({
                    ...switchStatus,
                    dough: !switchStatus.dough,
                  });
                }}
              />
            </div>
          </div>
          <hr />
          <Form.Group>
            <Form.Label>Dodatkowy sos</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              onChange={(event) => {
                setExtraSauce(event.target.value);
              }}
            >
              <option>Brak</option>
              <option>Pomidorowy</option>
              <option>Czosnkowy</option>
              <option>Ostry</option>
              <option>Musztardowo-miodowy</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <div className="button-space">
          <Button
            variant="primary"
            onClick={() => {
              addToCart();
              setComposing(false);
            }}
          >
            <ShoppingCartIcon style={{ marginRight: "5px" }} />
            <h5>Dodaj do koszyka</h5>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ComposeWindow;
