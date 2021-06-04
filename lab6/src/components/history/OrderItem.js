import React from "react";

const OrderItem = ({ pizza }) => {
  return (
    <div className="order-pizza">
      <div className="main-info">
        <h5>{`${pizza.name}, ${pizza.size}`}</h5>
        <p>{`${pizza.price.toFixed(2)} zł`}</p>
      </div>
      {pizza.name === "Proprio" ? (
        <div className="custom-pizza">
          <h5>Składniki:</h5>
          <div className="ingredients-list">
            {pizza.ingredients.map((ing) => (
              <p>{ing}, </p>
            ))}
          </div>
          <h5>Ciasto:</h5>
          <p>{pizza.doughType}</p>
          <h5>Sos:</h5>
          <p>{pizza.sauceType}</p>
          <h5>Dodatkowy sos:</h5>
          <p>{pizza.extraSauce}</p>
        </div>
      ) : null}
    </div>
  );
};

export default OrderItem;
