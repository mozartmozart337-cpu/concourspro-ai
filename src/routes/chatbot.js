const express = require("express");
const router = express.Router();

// SIMPLE IA RESPONSE (version test)
router.post("/", (req, res) => {
  const message = req.body.message;

  res.json({
    reply: "Tu as envoyé : " + message
  });
});

module.exports = router;
