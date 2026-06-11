const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    app: "ConcoursPro AI",
    status: "running 🚀",
    version: "1.0.0",
    time: new Date()
  });
});

module.exports = router;
