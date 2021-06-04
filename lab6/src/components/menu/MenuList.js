import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PizzaInfo from "./PizzaInfo";
import ComposeBlock from "./ComposeBlock";
import ComposeWindow from "./ComposeWindow";
import { getPizzas } from "../../utils/Firebase";

const MenuList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [composing, setComposing] = useState(false);
  const [composingSize, setCompozingSize] = useState("Duża 42 cm");
  const [composingPrice, setCompozingPrice] = useState(46, 4);

  useEffect(() => {
    const fetchData = async () => {
      const pizzasData = await getPizzas();

      let pizzasArray = [];

      pizzasData.forEach((doc) => {
        pizzasArray.push(doc.data());
      });

      setPizzas(pizzasArray);
    };

    fetchData();
  }, []);

  return (
    <>
      <ComposeWindow
        composing={composing}
        setComposing={setComposing}
        composingSize={composingSize}
        composingPrice={composingPrice}
      />
      <div className="menu">
        {pizzas.map((pizza) => (
          <PizzaInfo key={uuidv4()} pizza={pizza} />
        ))}
        <ComposeBlock
          setComposing={setComposing}
          setCompozingSize={setCompozingSize}
          setCompozingPrice={setCompozingPrice}
        />
      </div>
    </>
  );
};

export default MenuList;
