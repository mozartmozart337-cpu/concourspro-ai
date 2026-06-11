const aiService = require("../services/aiService");

exports.recommendation = (req, res) => {
  const { utilisateur } = req.body;

  const result =
    aiService.generateRecommendation(
      utilisateur
    );

  res.json(result);
};

exports.analysis = (req, res) => {
  const { score } = req.body;

  const result =
    aiService.analyzeScore(score);

  res.json({
    analyse: result
  });
};
