let exams = [];

exports.getAllExams = (req, res) => {
  res.json(exams);
};

exports.createExam = (req, res) => {
  const { titre, duree, matiere } = req.body;

  if (!titre || !duree || !matiere) {
    return res.status(400).json({
      message: "Informations manquantes"
    });
  }

  const exam = {
    id: exams.length + 1,
    titre,
    duree,
    matiere
  };

  exams.push(exam);

  res.json({
    message: "Examen créé ✅",
    exam
  });
};
