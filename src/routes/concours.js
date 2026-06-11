const express = require("express");
const router = express.Router();

let concours = [
  {
    id: 1,
    nom: "ENSPY",
    ville: "Yaoundé"
  },
  {
    id: 2,
    nom: "ENAM",
    ville: "Yaoundé"
  }
];

// Liste des concours
router.get("/", (req, res) => {
  res.json(concours);
});

// Ajouter un concours
router.post("/", (req, res) => {
  const { nom, ville } = req.body;

  if (!nom || !ville) {
    return res.status(400).json({
      message: "Nom et ville requis"
    });
  }

  const nouveauConcours = {
    id: concours.length + 1,
    nom,
    ville
  };

  concours.push(nouveauConcours);

  res.json({
    message: "Concours ajouté ✅",
    concours: nouveauConcours
  });
});

module.exports = router;
