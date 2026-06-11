const recommendationService = require(
  "../services/recommendationService"
);

exports.recommend = (req, res) => {
  const { reponses } = req.body;

  const recommandations =
    recommendationService.generateRecommendations(
      reponses
    );

  const top =
    recommendationService.topWeakSubjects(
      reponses
    );

  res.json({
    recommandations,
    top
  });
};
