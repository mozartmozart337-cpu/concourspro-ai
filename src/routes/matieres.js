const express = require("express");
const router = express.Router();

let matieres = [
  {
    id: 1,
    nom: "Mathématiques"
  },
  {
    id: 2,
    nom: "Physique"
  },
  {
    id: 3,
    nom: "Culture Générale"
  }
];

// Liste des matières
router.get("/", (req, res) => {
  res.json(matieres);
});

// Ajouter une matière
router.post("/", (req, res) => {
  const { nom } = req.body;

  if (!nom) {
    return res.status(400).json({
      message: "Nom requis"
    });
  }

  const matiere = {
    id: matieres.length + 1,
    nom
  };

  matieres.push(matiere);

  res.json({
    message: "Matière ajoutée ✅",
    matiere
  });
});

module.exports = router;
