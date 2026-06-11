class User {
  constructor(id, nom, email) {
    this.id = id;
    this.nom = nom;
    this.email = email;
    this.createdAt = new Date();
  }
}

module.exports = User;
