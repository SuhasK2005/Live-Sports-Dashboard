import express from "express";

const app = express();
const PORT = 8000;

// JSON middleware
app.use(express.json());

// Root GET route
app.get("/", (req, res) => {
  res.send("Welcome to the Sportz API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
