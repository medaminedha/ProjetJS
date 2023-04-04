let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", async (req, res, next) => {
    try {
        const  result = await studentSchema.create(req.body)
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }

});

// READ Students
router.get("/", async (req, res) => {
    try {
        const students = await studentSchema.find()
        res.json(students)
    } catch (error) {
        res.status(400).json(error)
    }


});

// UPDATE student
router.get("/update-student/:id",async (req, res) => {
    try { 
        const result = await studentSchema.findById(req.params.id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update Student Data
router.put("/update-student/:id",async(req, res, next) => {
    try {
        const result = await studentSchema.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }

});

// Delete Student
router.delete("/delete-student/:id",
async (req, res, next) => {
    try {
        const result = await studentSchema.findByIdAndDelete(
            req.params.id
        )
        res.json({msg:result})
    } catch (error) {
        res.status(400).json(error)
    }

});

module.exports = router;
