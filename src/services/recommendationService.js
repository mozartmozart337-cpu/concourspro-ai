const fs = require("fs");

class RecommendationService {

  loadQuestions() {
    const data = fs.readFileSync(
      "./src/data/questions.json",
      "utf-8"
    );

    return JSON.parse(data);
  }

  // Analyse des erreurs pour recommandations
  generateRecommendations(reponses) {
    const questions = this.loadQuestions();

    let erreursParMatiere = {};

    reponses.forEach(rep => {
      const question = questions.find(
        q => q.id === rep.questionId
      );

      if (!question) return;

      const isCorrect =
        question.reponse === rep.reponse;

      if (!isCorrect) {
        if (
          !erreursParMatiere[question.matiere]
        ) {
          erreursParMatiere[
            question.matiere
          ] = 0;
        }

        erreursParMatiere[
          question.matiere
        ]++;
      }
    });

    // Transformer en recommandations
    let recommandations = [];

    Object.keys(erreursParMatiere).forEach(
      matiere => {
        recommandations.push({
          matiere,
          message:
            "Revoir les bases de " +
            matiere +
            " (beaucoup d'erreurs détectées)",
          erreurs:
            erreursParMatiere[matiere]
        });
      }
    );

    return recommandations;
  }

  // Top matières à améliorer
  topWeakSubjects(reponses) {
    const recs =
      this.generateRecommendations(
        reponses
      );

    return recs
      .sort((a, b) => b.erreurs - a.erreurs)
      .slice(0, 3);
  }
}

module.exports = new RecommendationService();
