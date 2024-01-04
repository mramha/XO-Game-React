import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PlayerNames.scss"; // Import the SCSS file
import Game from "../game/Game"; // Import the Game component
import close from "../../img/close.png"; // Corrected import statement
import o from "../../img/o.png"; // Corrected import statement

const PlayerNames = () => {
  const initialPlayers = [
    { id: "X", name: "" },
    { id: "O", name: "" },
  ];

  const [players, setPlayers] = useState(initialPlayers);
  const [gameStarted, setGameStarted] = useState(false);

  const handleInputChange = (e, playerId) => {
    const updatedPlayers = players.map((player) =>
      player.id === playerId ? { ...player, name: e.target.value } : player
    );
    setPlayers(updatedPlayers);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
          {players.map((player) => (
            <label key={player.id} className={player.id.toLowerCase()}>
              <img
                src={process.env.PUBLIC_URL + (player.id === "X" ? close : o)}
                alt={player.id === "X" ? "Close Icon" : "Cooking Icon"}
                style={{ marginRight: "10px", marginBottom: "-6px" }}
              />
              <motion.input
                type="text"
                value={player.name}
                onChange={(e) => handleInputChange(e, player.id)}
                required
                variants={itemVariants}
              />
            </label>
          ))}
          <br />
          <motion.button type="submit" variants={itemVariants}>
            Start Game
          </motion.button>
        </motion.form>
      </motion.div>
    );
  } else {
    // If the game has started, render the Game component and pass player names as props
    return <Game playerXName={players[0].name} playerOName={players[1].name} />;
  }
};

export default PlayerNames;
