const store = require("../services/storeService");

exports.getDashboard = (req, res) => {
  const email = req.user.email;

  const data = store.read();

  const user = data.progress[email];

  if (!user) {
    return res.json({
      score: 0,
      level: 1,
      history: []
    });
  }

  res.json({
    message: "Dashboard",
    data: user
  });
};
