import React, { useState, useContext } from "react"; // Import useContext
import { motion } from "framer-motion";
import "./PlayerNames.scss";
import Game from "../game/Game";
import close from "../../img/close.png";
import o from "../../img/o.png";
import UserContext from "../../components/UserContext"; // Update with the correct path

const PlayerNames = () => {
  const { players, setPlayers } = useContext(UserContext); // Corrected to include players

  const [gameStarted, setGameStarted] = useState(false);

  const handleInputChange = (e, playerId) => {
    const updatedPlayers = players.map((player) =>
      player.id === playerId ? { ...player, name: e.target.value } : player
    );
    setPlayers(updatedPlayers);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
                src={player.id === "X" ? close : o} // Updated image source
                alt={player.id === "X" ? "Close Icon" : "O Icon"} // Updated alt text
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
    return <Game playerXName={players[0].name} playerOName={players[1].name} />;
  }
};

export default PlayerNames;
