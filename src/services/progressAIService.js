class ProgressAIService {

  calculateProgress(totalQuestions, correctAnswers) {
    if (totalQuestions === 0) return 0;

    return (
      (correctAnswers / totalQuestions) *
      100
    );
  }

  levelFromProgress(percent) {
    if (percent >= 80) return "Excellent";
    if (percent >= 60) return "Bon";
    if (percent >= 40) return "Moyen";
    return "Faible";
  }
}

module.exports = new ProgressAIService();
