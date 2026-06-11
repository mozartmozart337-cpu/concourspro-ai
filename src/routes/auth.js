const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// test route (IMPORTANT)
router.get("/test", (req, res) => {
  res.send("AUTH ROUTE OK 🚀");
});

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;

