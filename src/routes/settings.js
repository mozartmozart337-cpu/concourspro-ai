const express = require("express");
const router = express.Router();

let settings = [
  {
    id: 1,
    utilisateur: "Mozart",
    theme: "clair",
    notifications: true
  }
];

router.get("/", (req, res) => {
  res.json(settings);
});

router.post("/", (req, res) => {
  const { utilisateur, theme, notifications } = req.body;

  if (!utilisateur) {
    return res.status(400).json({
      message: "Utilisateur requis"
    });
  }

  const setting = {
    id: settings.length + 1,
    utilisateur,
    theme: theme || "clair",
    notifications:
      notifications !== undefined ? notifications : true
  };

  settings.push(setting);

  res.json({
    message: "Paramètres enregistrés ✅",
    setting
  });
});

module.exports = router;
