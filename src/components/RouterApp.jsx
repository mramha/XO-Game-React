import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "../pages/game/Game";
import PlayerNames from "../pages/regester/PlayerNames";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<PlayerNames />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default RouterApp;
