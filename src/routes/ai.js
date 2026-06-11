const express = require("express");
const router = express.Router();

// Test IA
router.get("/", (req, res) => {
  res.json({
    message: "Module IA ConcoursPro AI prêt 🚀"
  });
});

// Recommandation simple
router.post("/recommendation", (req, res) => {
  const { matiere } = req.body;

  res.json({
    recommandation:
      "Travaille davantage les exercices de " + (matiere || "Mathématiques")
  });
});

module.exports = router;
