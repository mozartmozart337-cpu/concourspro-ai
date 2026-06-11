const express = require("express");
const router = express.Router();

let scores = [
  {
    id: 1,
    etudiant: "Mozart",
    concours: "ENSPY",
    score: 15
  }
];

// Liste des scores
router.get("/", (req, res) => {
  res.json(scores);
});

// Ajouter un score
router.post("/", (req, res) => {
  const { etudiant, concours, score } = req.body;

  if (!etudiant || !concours || score === undefined) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const nouveauScore = {
    id: scores.length + 1,
    etudiant,
    concours,
    score
  };

  scores.push(nouveauScore);

  res.json({
    message: "Score ajouté ✅",
    score: nouveauScore
  });
});

module.exports = router;
