const express = require("express");
const router = express.Router();

let leaderboard = [
  {
    id: 1,
    etudiant: "Mozart",
    points: 1250
  }
];

router.get("/", (req, res) => {
  res.json(leaderboard);
});

router.post("/", (req, res) => {
  const { etudiant, points } = req.body;

  if (!etudiant || points === undefined) {
    return res.status(400).json({
      message: "Informations manquantes"
    });
  }

  const player = {
    id: leaderboard.length + 1,
    etudiant,
    points
  };

  leaderboard.push(player);

  res.json({
    message: "Classement mis à jour ✅",
    player
  });
});

module.exports = router;
