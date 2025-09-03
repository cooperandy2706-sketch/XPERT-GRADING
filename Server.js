const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/students");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection (use MongoDB Atlas or local MongoDB)
mongoose.connect("mongodb://localhost:27017/xpertgrading", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Routes
app.use("/api/students", studentRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
