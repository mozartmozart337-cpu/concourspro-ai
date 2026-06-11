const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const controller = require("../controllers/dashboardController");

router.get("/", auth, controller.getDashboard);

module.exports = router;
