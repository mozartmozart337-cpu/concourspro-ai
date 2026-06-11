const express = require("express");
const router = express.Router();

const correctionController = require(
  "../controllers/correctionController"
);

router.post("/", correctionController.correct);

module.exports = router;
