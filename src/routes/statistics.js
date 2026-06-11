const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    etudiants: 1200,
    concours: 15,
    examens: 350,
    questions: 10000,
    utilisateursActifs: 450
  });
});

module.exports = router;
