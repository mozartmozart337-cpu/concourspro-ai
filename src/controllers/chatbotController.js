const chatbot = require("../services/chatbotService");
const store = require("../services/storeService");

exports.chat = (req, res) => {
  const { message, email } = req.body;

  if (!message || !email) {
    return res.status(400).json({ message: "Message et email requis" });
  }

  const reply = chatbot.reply(email, message);

  res.json({
    user: message,
    bot: reply
  });
};
