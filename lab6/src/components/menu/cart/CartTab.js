import React, { useState, useContext, useEffect } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "react-bootstrap";

import CartItem from "./CartItem";
import CartContext from "./CartContext";
import { auth, sendOrder } from "../../../utils/Firebase";

const CartTab = () => {
  const [active, setActive] = useState(false);

  const { content, setContent } = useContext(CartContext);

  const confirmOrder = async () => {
    if (content.length === 0) {
      alert("Shopping cart is empty");
      return;
    }

    const sum = content
      .map((c) => c.price)
      .reduce((prev, curr) => {
        return prev + curr;
      });

    await sendOrder(auth.currentUser, content, sum).then(() => {
      setContent([]);
      setActive(false);
    });
  };

  useEffect(() => {
    setActive(true);
  }, [content]);

  return (
    <div className={`cart-space ${active ? "cart-active" : ""}`}>
      <div
        className="cart-button"
        onClick={() => {
          setActive(!active);
        }}
      >
        <ShoppingCartIcon />
        <h5>{`${
          content.length > 0
            ? content
                .map((c) => c.price)
                .reduce((prev, curr) => {
                  return prev + curr;
                })
                .toFixed(2)
            : "00.00"
        } zł`}</h5>
      </div>
      <div className="cart-panel">
        <div className="list-space">
          {content.map((pizza) => (
            <CartItem key={pizza.id} pizza={pizza} />
          ))}
        </div>
        <div className="button-space">
          <Button variant="primary" onClick={confirmOrder}>
            Zatwierdź
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
