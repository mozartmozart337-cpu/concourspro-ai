class Student {
  constructor(id, nom, concours) {
    this.id = id;
    this.nom = nom;
    this.concours = concours;
    this.createdAt = new Date();
  }
}

module.exports = Student;
