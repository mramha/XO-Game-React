import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PlayerNames.scss"; // Import the SCSS file
import Game from "./Game"; // Import the Game component
import close from "../img/close.png"; // Corrected import statement
import o from "../img/o.png"; // Corrected import statement

const PlayerNames = () => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleInputChange = (e, setPlayer) => {
    setPlayer(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Save player names to local storage
    localStorage.setItem("playerX", playerX);
    localStorage.setItem("playerO", playerO);

    // Set the gameStarted state to true
    setGameStarted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Conditionally render the PlayerNames or Game component
  if (!gameStarted) {
    return (
      <motion.div
        className="player-names-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="title" variants={itemVariants}>
          Enter Player Names
        </h2>
        <motion.form
          onSubmit={handleFormSubmit}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <label htmlFor="playerX" className="x">
            <img
              src={process.env.PUBLIC_URL + close}
              alt="Cooking Icon"
              style={{ marginRight: "10px", marginBottom: "-6px" }}
            />
            <motion.input
              type="text"
              id="playerX" // Make sure to use the same id as the 'for' attribute in the label
              value={playerX}
              onChange={(e) => handleInputChange(e, setPlayerX)}
              required
              variants={itemVariants}
            />
          </label>

          <br />
          <label className="o">
            <img
              src={process.env.PUBLIC_URL + o}
              alt="Cooking Icon"
              style={{ marginRight: "10px", marginBottom: "-6px" }}
            />
            <motion.input
              type="text"
              value={playerO}
              onChange={(e) => handleInputChange(e, setPlayerO)}
              required
              variants={itemVariants}
            />
          </label>
          <br />
          <motion.button type="submit" variants={itemVariants}>
            Start Game
          </motion.button>
        </motion.form>
      </motion.div>
    );
  } else {
    // If the game has started, render the Game component
    return <Game />;
  }
};

export default PlayerNames;
