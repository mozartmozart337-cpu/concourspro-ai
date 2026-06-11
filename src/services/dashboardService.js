const fs = require("fs");

class DashboardService {

  loadData() {
    const questions = JSON.parse(
      fs.readFileSync(
        "./src/data/questions.json",
        "utf-8"
      )
    );

    return questions;
  }

  buildDashboard(reponses) {
    const questions = this.loadData();

    let total = reponses.length;
    let correct = 0;

    let statsParMatiere = {};

    reponses.forEach(rep => {
      const question = questions.find(
        q => q.id === rep.questionId
      );

      if (!question) return;

      const isCorrect =
        question.reponse === rep.reponse;

      if (isCorrect) correct++;

      // stats par matière
      if (
        !statsParMatiere[question.matiere]
      ) {
        statsParMatiere[question.matiere] = {
          total: 0,
          correct: 0
        };
      }

      statsParMatiere[
        question.matiere
      ].total++;

      if (isCorrect) {
        statsParMatiere[
          question.matiere
        ].correct++;
      }
    });

    const score =
      total > 0 ? (correct / total) * 100 : 0;

    return {
      score,
      total,
      correct,
      statsParMatiere,
      performance:
        score >= 80
          ? "Excellent"
          : score >= 60
          ? "Bon"
          : score >= 40
          ? "Moyen"
          : "Faible"
    };
  }
}

module.exports = new DashboardService();
