const express = require("express");
const router = express.Router();

let exams = [
  {
    id: 1,
    titre: "Examen Blanc ENSPY Maths",
    duree: 120,
    matiere: "Mathématiques"
  }
];

// Liste examens
router.get("/", (req, res) => {
  res.json(exams);
});

// Ajouter examen
router.post("/", (req, res) => {
  const { titre, duree, matiere } = req.body;

  if (!titre || !duree || !matiere) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const exam = {
    id: exams.length + 1,
    titre,
    duree,
    matiere
  };

  exams.push(exam);

  res.json({
    message: "Examen créé ✅",
    exam
  });
});

module.exports = router;
