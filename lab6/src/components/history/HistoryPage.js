import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { getOrderHistory, auth } from "../../utils/Firebase";
import Order from "./Order";

const HistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getOrderHistory(auth.currentUser);

      let ordersArray = [];

      ordersData.forEach((doc) => {
        ordersArray.push(doc.data());
      });

      setOrders(ordersArray);
    };

    fetchData();
  }, []);

  return (
    <div className="history-page">
      <div className="back-image"></div>
      <div className="back-gradient"></div>
      <div className="order-list">
        {orders.map((o) => (
          <Order key={uuidv4()} order={o} />
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
