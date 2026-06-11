class AIService {
  generateRecommendation(student) {
    return {
      utilisateur: student,
      recommandation:
        "Renforce les Mathématiques et fais un examen blanc cette semaine."
    };
  }

  analyzeScore(score) {
    if (score >= 15) {
      return "Excellent niveau";
    }

    if (score >= 10) {
      return "Niveau satisfaisant";
    }

    return "Niveau à renforcer";
  }
}

module.exports = new AIService();
