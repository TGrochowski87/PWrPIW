import React, { useContext } from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import CartContext from "./CartContext";

const CartItem = ({ pizza }) => {
  const { content, setContent } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="left-side">
        <p>{`${pizza.name}, ${pizza.size}`}</p>
        <div
          className="delete-button"
          onClick={() => {
            const newContents = content.filter((c) => c.id !== pizza.id);
            setContent(newContents);
          }}
        >
          <DeleteIcon />
          <p>Usuń</p>
        </div>
      </div>
      <h4>{`${pizza.price.toFixed(2)} zł`}</h4>
    </div>
  );
};

export default CartItem;
