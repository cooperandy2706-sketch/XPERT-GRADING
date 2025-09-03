const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    subjects: [
        {
            subject: String,
            score: Number
        }
    ],
    average: Number,
    grade: String
});

module.exports = mongoose.model("Student", studentSchema);
