const express = require("express");
const router = express.Router();

let badges = [
  {
    id: 1,
    nom: "Débutant",
    points: 100
  }
];

router.get("/", (req, res) => {
  res.json(badges);
});

router.post("/", (req, res) => {
  const { nom, points } = req.body;

  if (!nom || points === undefined) {
    return res.status(400).json({
      message: "Informations manquantes"
    });
  }

  const badge = {
    id: badges.length + 1,
    nom,
    points
  };

  badges.push(badge);

  res.json({
    message: "Badge ajouté ✅",
    badge
  });
});

module.exports = router;
