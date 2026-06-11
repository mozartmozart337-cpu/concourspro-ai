const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
app.use("/api/chatbot", require("./src/routes/chatbot"));
app.use("/api/status", require("./src/routes/status"));

// HOME
app.get("/", (req, res) => {
  res.json({ status: "ConcoursPro AI running 🚀" });
});

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
