const express = require("express");
const router = express.Router();

let questions = [
  {
    id: 1,
    matiere: "Mathématiques",
    question: "Combien vaut 2 + 2 ?",
    reponse: "4"
  }
];

router.get("/", (req, res) => {
  res.json(questions);
});

router.post("/", (req, res) => {
  const { matiere, question, reponse } = req.body;

  if (!matiere || !question || !reponse) {
    return res.status(400).json({
      message: "Tous les champs sont requis"
    });
  }

  const nouvelleQuestion = {
    id: questions.length + 1,
    matiere,
    question,
    reponse
  };

  questions.push(nouvelleQuestion);

  res.json({
    message: "Question ajoutée ✅",
    question: nouvelleQuestion
  });
});

module.exports = router;
