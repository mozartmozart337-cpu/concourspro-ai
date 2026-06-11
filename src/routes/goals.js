const express = require("express");
const router = express.Router();

let goals = [
  {
    id: 1,
    utilisateur: "Mozart",
    objectif: "Terminer 100 exercices de maths",
    progression: 25
  }
];

router.get("/", (req, res) => {
  res.json(goals);
});

router.post("/", (req, res) => {
  const { utilisateur, objectif, progression } = req.body;

  if (!utilisateur || !objectif) {
    return res.status(400).json({
      message: "Informations manquantes"
    });
  }

  const goal = {
    id: goals.length + 1,
    utilisateur,
    objectif,
    progression: progression || 0
  };

  goals.push(goal);

  res.json({
    message: "Objectif ajouté ✅",
    goal
  });
});

module.exports = router;
