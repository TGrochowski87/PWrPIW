import { createContext } from "react";

const CartContext = createContext({
  content: [],
  setContent: () => {},
});

export default CartContext;
