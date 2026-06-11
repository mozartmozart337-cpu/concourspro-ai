const express = require("express");
const router = express.Router();

let subscriptions = [
  {
    id: 1,
    utilisateur: "Mozart",
    formule: "Premium",
    statut: "active"
  }
];

router.get("/", (req, res) => {
  res.json(subscriptions);
});

router.post("/", (req, res) => {
  const { utilisateur, formule } = req.body;

  if (!utilisateur || !formule) {
    return res.status(400).json({
      message: "Informations manquantes"
    });
  }

  const subscription = {
    id: subscriptions.length + 1,
    utilisateur,
    formule,
    statut: "active"
  };

  subscriptions.push(subscription);

  res.json({
    message: "Abonnement créé ✅",
    subscription
  });
});

module.exports = router;
