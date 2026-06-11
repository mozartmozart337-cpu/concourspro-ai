const fs = require("fs");

class CorrectionService {

  loadQuestions() {
    const data = fs.readFileSync(
      "./src/data/questions.json",
      "utf-8"
    );

    return JSON.parse(data);
  }

  // Corriger un examen
  correctExam(reponses) {
    const questions = this.loadQuestions();

    let score = 0;
    let total = reponses.length;

    let details = [];

    reponses.forEach(rep => {
      const question = questions.find(
        q => q.id === rep.questionId
      );

      if (!question) return;

      const isCorrect =
        question.reponse === rep.reponse;

      if (isCorrect) score++;

      details.push({
        questionId: rep.questionId,
        correct: isCorrect,
        bonneReponse: question.reponse
      });
    });

    return {
      score,
      total,
      pourcentage:
        total > 0
          ? (score / total) * 100
          : 0,
      details
    };
  }

  // Analyse du niveau
  analyseNiveau(pourcentage) {
    if (pourcentage >= 80) {
      return "Excellent niveau 🚀";
    }

    if (pourcentage >= 60) {
      return "Bon niveau 👍";
    }

    if (pourcentage >= 40) {
      return "Niveau moyen ⚠️";
    }

    return "Niveau faible ❌";
  }
}

module.exports = new CorrectionService();
