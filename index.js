const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/chatbot", require("./src/routes/chatbot"));
app.use("/api/dashboard", require("./src/routes/dashboard"));

// HOME
app.get("/", (req, res) => {
  res.json({
    app: "ConcoursPro AI",
    status: "FINAL VERSION 🚀"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Serveur en ligne sur port " + PORT);
});
