const express = require("express");
const router = express.Router();

let resources = [
  {
    id: 1,
    titre: "Épreuve ENSPY 2024",
    type: "PDF"
  }
];

router.get("/", (req, res) => {
  res.json(resources);
});

router.post("/", (req, res) => {
  const { titre, type } = req.body;

  if (!titre || !type) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const resource = {
    id: resources.length + 1,
    titre,
    type
  };

  resources.push(resource);

  res.json({
    message: "Ressource ajoutée ✅",
    resource
  });
});

module.exports = router;
