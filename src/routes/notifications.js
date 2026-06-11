const express = require("express");
const router = express.Router();

let notifications = [
  {
    id: 1,
    titre: "Bienvenue",
    message: "Bienvenue sur ConcoursPro AI"
  }
];

router.get("/", (req, res) => {
  res.json(notifications);
});

router.post("/", (req, res) => {
  const { titre, message } = req.body;

  if (!titre || !message) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const notification = {
    id: notifications.length + 1,
    titre,
    message
  };

  notifications.push(notification);

  res.json({
    message: "Notification créée ✅",
    notification
  });
});

module.exports = router;
