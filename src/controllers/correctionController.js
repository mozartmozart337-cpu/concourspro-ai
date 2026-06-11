const correctionService = require(
  "../services/correctionService"
);

exports.correct = (req, res) => {
  const { reponses } = req.body;

  const result =
    correctionService.correctExam(reponses);

  const analyse =
    correctionService.analyseNiveau(
      result.pourcentage
    );

  res.json({
    ...result,
    analyse
  });
};
