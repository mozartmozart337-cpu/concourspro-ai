const express = require("express");
const router = express.Router();

let tests = [
  {
    id: 1,
    etudiant: "Mozart",
    examen: "ENSPY Maths",
    note: 16
  }
];

router.get("/", (req, res) => {
  res.json(tests);
});

router.post("/", (req, res) => {
  const { etudiant, examen, note } = req.body;

  if (!etudiant || !examen || note === undefined) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const test = {
    id: tests.length + 1,
    etudiant,
    examen,
    note
  };

  tests.push(test);

  res.json({
    message: "Résultat ajouté ✅",
    test
  });
});

module.exports = router;
