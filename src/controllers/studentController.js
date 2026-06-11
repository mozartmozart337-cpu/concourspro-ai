const { read, write } = require("../database/db");

const FILE = "students.json";

// GET
exports.getAllStudents = (req, res) => {
  const data = read(FILE);
  res.json(data);
};

// CREATE
exports.createStudent = (req, res) => {
  const { nom, concours } = req.body;

  if (!nom || !concours) {
    return res.status(400).json({
      message: "Nom et concours requis"
    });
  }

  const students = read(FILE);

  const student = {
    id: Date.now(),
    nom,
    concours
  };

  students.push(student);

  write(FILE, students);

  res.json({
    message: "Étudiant créé ✅",
    student
  });
};
