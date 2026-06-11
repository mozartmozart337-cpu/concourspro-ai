const store = require("./storeService");

class ChatbotService {

  reply(email, message) {
    const msg = message.toLowerCase();
    const data = store.read();

    if (!data.progress[email]) {
      data.progress[email] = {
        score: 0,
        level: 1,
        history: []
      };
    }

    const user = data.progress[email];

    if (msg.includes("math")) {
      user.score += 5;
      user.history.push("maths");

      store.write(data);

      return "📘 Maths : exercices concours + révision des bases.";
    }

    if (msg.includes("physique")) {
      user.score += 5;
      user.history.push("physique");

      store.write(data);

      return "⚡ Physique : lois fondamentales + exercices types concours.";
    }

    if (msg.includes("profil")) {
      return `📊 Niveau: ${user.level} | Score: ${user.score}`;
    }

    store.write(data);

    return "🤖 Pose une question sur maths ou physique.";
  }
}

module.exports = new ChatbotService();
