const express = require("express");
const router = express.Router();

let papers = [
  {
    id: 1,
    concours: "ENSPY",
    annee: 2024,
    matiere: "Mathématiques"
  }
];

router.get("/", (req, res) => {
  res.json(papers);
});

router.post("/", (req, res) => {
  const { concours, annee, matiere } = req.body;

  if (!concours || !annee || !matiere) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const paper = {
    id: papers.length + 1,
    concours,
    annee,
    matiere
  };

  papers.push(paper);

  res.json({
    message: "Épreuve ajoutée ✅",
    paper
  });
});

module.exports = router;
