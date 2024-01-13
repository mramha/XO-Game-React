import React from "react";

const UserContext = React.createContext({
  players: [
    { id: "X", name: "" },
    { id: "O", name: "" },
  ],
  setPlayers: () => {},
});

export default UserContext;
