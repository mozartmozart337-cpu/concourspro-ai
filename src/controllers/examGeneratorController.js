const examService = require(
  "../services/examGeneratorService"
);

exports.generate = (req, res) => {
  const { concours, matiere, nombre } = req.body;

  const exam = examService.generateExam(
    concours,
    matiere,
    nombre || 5
  );

  res.json({
    concours,
    matiere,
    questions: exam
  });
};

exports.generateFull = (req, res) => {
  const { concours } = req.body;

  const exam = examService.generateFullExam(
    concours
  );

  res.json({
    concours,
    questions: exam
  });
};
