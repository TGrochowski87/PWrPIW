import React from "react";

import OrderItem from "./OrderItem";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h3>{`Liczba pizz: ${order.order.length}, Kwota: ${order.price.toFixed(
        2
      )} zł`}</h3>
      <ul>
        {order.order.map((pizza) => (
          <li>
            <OrderItem key={pizza.id} pizza={pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
