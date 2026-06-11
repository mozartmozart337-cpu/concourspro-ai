const express = require("express");
const router = express.Router();

let progress = [
  {
    id: 1,
    etudiant: "Mozart",
    matiere: "Mathématiques",
    progression: 65
  }
];

// Liste progression
router.get("/", (req, res) => {
  res.json(progress);
});

// Ajouter progression
router.post("/", (req, res) => {
  const { etudiant, matiere, progression } = req.body;

  if (!etudiant || !matiere || progression === undefined) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const item = {
    id: progress.length + 1,
    etudiant,
    matiere,
    progression
  };

  progress.push(item);

  res.json({
    message: "Progression enregistrée ✅",
    data: item
  });
});

module.exports = router;
