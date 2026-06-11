const express = require("express");
const router = express.Router();

let referrals = [
  {
    id: 1,
    parrain: "Mozart",
    filleul: "Jean",
    statut: "validé"
  }
];

router.get("/", (req, res) => {
  res.json(referrals);
});

router.post("/", (req, res) => {
  const { parrain, filleul } = req.body;

  if (!parrain || !filleul) {
    return res.status(400).json({
      message: "Parrain et filleul requis"
    });
  }

  const referral = {
    id: referrals.length + 1,
    parrain,
    filleul,
    statut: "en attente"
  };

  referrals.push(referral);

  res.json({
    message: "Parrainage enregistré ✅",
    referral
  });
});

module.exports = router;
