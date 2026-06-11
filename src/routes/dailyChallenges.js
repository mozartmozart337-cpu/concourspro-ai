const express = require("express");
const router = express.Router();

let challenges = [
  {
    id: 1,
    titre: "Résoudre 10 exercices de maths",
    recompense: 50
  }
];

router.get("/", (req, res) => {
  res.json(challenges);
});

router.post("/", (req, res) => {
  const { titre, recompense } = req.body;

  if (!titre || recompense === undefined) {
    return res.status(400).json({
      message: "Informations manquantes"
    });
  }

  const challenge = {
    id: challenges.length + 1,
    titre,
    recompense
  };

  challenges.push(challenge);

  res.json({
    message: "Défi créé ✅",
    challenge
  });
});

module.exports = router;
