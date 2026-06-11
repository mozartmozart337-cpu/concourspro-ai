const fs = require("fs");

class ExamGeneratorService {

  // Charger les questions
  loadQuestions() {
    const data = fs.readFileSync(
      "./src/data/questions.json",
      "utf-8"
    );

    return JSON.parse(data);
  }

  // Générer un examen filtré
  generateExam(concours, matiere, nombre = 5) {
    const questions = this.loadQuestions();

    const filtered = questions.filter(q =>
      q.concours === concours &&
      q.matiere === matiere
    );

    // Mélanger les questions
    const shuffled = filtered.sort(
      () => 0.5 - Math.random()
    );

    return shuffled.slice(0, nombre);
  }

  // Générer examen complet multi-matières
  generateFullExam(concours, nombreParMatiere = 3) {
    const questions = this.loadQuestions();

    const matieres = [
      ...new Set(
        questions
          .filter(q => q.concours === concours)
          .map(q => q.matiere)
      )
    ];

    let exam = [];

    matieres.forEach(matiere => {
      const filtered = questions.filter(
        q =>
          q.concours === concours &&
          q.matiere === matiere
      );

      const shuffled = filtered.sort(
        () => 0.5 - Math.random()
      );

      exam.push(
        ...shuffled.slice(0, nombreParMatiere)
      );
    });

    return exam;
  }
}

module.exports = new ExamGeneratorService();
