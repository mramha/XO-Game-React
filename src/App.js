import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./components/RouterApp";
import UserContext from "./components/UserContext";

export const App = () => {
  const [players, setPlayers] = useState([
    { id: "X", name: "" },
    { id: "O", name: "" },
  ]);

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ players, setPlayers }}>
          <RouterApp />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
