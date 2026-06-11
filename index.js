const express = require("express");
const app = express();

app.use(express.json());

// TEST ROUTE ROOT
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "ConcoursPro AI API is running 🚀"
  });
});

// ROUTES API
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/chatbot", require("./src/routes/chatbot"));
app.use("/api/dashboard", require("./src/routes/dashboard"));

// PORT RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
