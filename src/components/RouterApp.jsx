import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "../pages/Game";
import PlayerNames from "../pages/PlayerNames";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<PlayerNames />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default RouterApp;
