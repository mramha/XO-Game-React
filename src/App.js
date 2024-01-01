import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./components/RouterApp";
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </div>
  );
};
export default App;
