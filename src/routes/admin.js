const express = require("express");
const router = express.Router();

// ⚠️ Simulation base de données (plus tard remplacé par DB)
let users = [];
let questions = [];
let concours = [];

/* =========================
   USERS ADMIN
========================= */

// Voir tous les users
router.get("/users", (req, res) => {
  res.json(users);
});

// Supprimer un user
router.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(u => u.id !== id);

  res.json({ message: "Utilisateur supprimé" });
});

/* =========================
   QUESTIONS ADMIN
========================= */

// Voir questions
router.get("/questions", (req, res) => {
  res.json(questions);
});

// Ajouter question
router.post("/questions", (req, res) => {
  const { question, reponse } = req.body;

  if (!question || !reponse) {
    return res.status(400).json({
      message: "Champs manquants"
    });
  }

  const q = {
    id: questions.length + 1,
    question,
    reponse
  };

  questions.push(q);

  res.json({
    message: "Question ajoutée",
    q
  });
});

// Supprimer question
router.delete("/questions/:id", (req, res) => {
  const id = parseInt(req.params.id);

  questions = questions.filter(q => q.id !== id);

  res.json({ message: "Question supprimée" });
});

/* =========================
   CONCOURS ADMIN
========================= */

// Voir concours
router.get("/concours", (req, res) => {
  res.json(concours);
});

// Ajouter concours
router.post("/concours", (req, res) => {
  const { nom } = req.body;

  if (!nom) {
    return res.status(400).json({
      message: "Nom requis"
    });
  }

  const c = {
    id: concours.length + 1,
    nom
  };

  concours.push(c);

  res.json({
    message: "Concours ajouté",
    c
  });
});

module.exports = router;
