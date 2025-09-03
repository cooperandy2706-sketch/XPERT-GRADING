const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// Add a student
router.post("/", async (req, res) => {
    try {
        const { name, class: className, subjects } = req.body;

        // Calculate average + grade
        const total = subjects.reduce((sum, s) => sum + s.score, 0);
        const avg = total / subjects.length;
        let grade = "F";
        if (avg >= 80) grade = "A";
        else if (avg >= 70) grade = "B";
        else if (avg >= 60) grade = "C";
        else if (avg >= 50) grade = "D";

        const student = new Student({
            name,
            class: className,
            subjects,
            average: avg,
            grade
        });

        await student.save();
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
