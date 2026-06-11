const express = require("express");
const router = express.Router();

let corrections = [
  {
    id: 1,
    epreuve: "ENSPY Maths 2024",
    auteur: "ConcoursPro AI"
  }
];

router.get("/", (req, res) => {
  res.json(corrections);
});

router.post("/", (req, res) => {
  const { epreuve, auteur } = req.body;

  if (!epreuve || !auteur) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const correction = {
    id: corrections.length + 1,
    epreuve,
    auteur
  };

  corrections.push(correction);

  res.json({
    message: "Corrigé ajouté ✅",
    correction
  });
});

module.exports = router;
