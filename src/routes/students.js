const express = require("express");
const router = express.Router();

let students = [
  {
    id: 1,
    nom: "Mozart",
    concours: "ENSPY"
  }
];

// Liste des étudiants
router.get("/", (req, res) => {
  res.json(students);
});

// Ajouter un étudiant
router.post("/", (req, res) => {
  const { nom, concours } = req.body;

  if (!nom || !concours) {
    return res.status(400).json({
      message: "Nom et concours requis"
    });
  }

  const student = {
    id: students.length + 1,
    nom,
    concours
  };

  students.push(student);

  res.json({
    message: "Étudiant ajouté ✅",
    student
  });
});

module.exports = router;
