import React from "react";

import HomePageJumbo from "./HomePageJumbo";
import MessageAuth from "./MessageAuth";
import MessageUnauth from "./MessageUnauth";

const HomePage = ({ userName }) => {
  return (
    <HomePageJumbo>
      {userName ? <MessageAuth userName={userName} /> : <MessageUnauth />}
    </HomePageJumbo>
  );
};

export default HomePage;
