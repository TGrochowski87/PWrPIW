import React, { useState } from "react";

import MenuList from "./MenuList";
import CartTab from "./cart/CartTab";
import CartContext from "./cart/CartContext";

const MenuPage = () => {
  const [content, setContent] = useState([]);

  return (
    <div className="menu-page">
      <div className="back-image"></div>
      <CartContext.Provider value={{ content, setContent }}>
        <CartTab />
        <MenuList />
      </CartContext.Provider>
    </div>
  );
};

export default MenuPage;
