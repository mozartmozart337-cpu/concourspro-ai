const express = require("express");
const router = express.Router();

let courses = [
  {
    id: 1,
    titre: "Fonctions numériques",
    matiere: "Mathématiques",
    niveau: "Concours ENSPY"
  }
];

router.get("/", (req, res) => {
  res.json(courses);
});

router.post("/", (req, res) => {
  const { titre, matiere, niveau } = req.body;

  if (!titre || !matiere || !niveau) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const course = {
    id: courses.length + 1,
    titre,
    matiere,
    niveau
  };

  courses.push(course);

  res.json({
    message: "Cours ajouté ✅",
    course
  });
});

module.exports = router;
