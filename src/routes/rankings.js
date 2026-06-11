const express = require("express");
const router = express.Router();

let rankings = [
  {
    id: 1,
    etudiant: "Mozart",
    concours: "ENSPY",
    score: 18,
    rang: 1
  }
];

// Liste des classements
router.get("/", (req, res) => {
  res.json(rankings);
});

// Ajouter un classement
router.post("/", (req, res) => {
  const { etudiant, concours, score, rang } = req.body;

  if (!etudiant || !concours || score === undefined || rang === undefined) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const ranking = {
    id: rankings.length + 1,
    etudiant,
    concours,
    score,
    rang
  };

  rankings.push(ranking);

  res.json({
    message: "Classement ajouté ✅",
    ranking
  });
});

module.exports = router;
