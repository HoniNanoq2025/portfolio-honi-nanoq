const express = require("express");
const router = express.Router();
const Education = require("../models/education.model");

// GET: Get all education records
router.get("/", async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.status(200).json({ data: education });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch education records",
      error: error.message,
    });
  }
});

// GET: Get single education by ID
router.get("/:id", async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.status(200).json({ data: education });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch education",
      error: error.message,
    });
  }
});

// POST: Create new education record
router.post("/", async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json({
      message: "Education created successfully",
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create education",
      error: error.message,
    });
  }
});

// PUT: Update education by ID
router.put("/:id", async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.status(200).json({
      message: "Education updated successfully",
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update education",
      error: error.message,
    });
  }
});

// DELETE: Delete education by ID
router.delete("/:id", async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ message: "Education not found" });
    }
    res.status(200).json({ message: "Education deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete education",
      error: error.message,
    });
  }
});

module.exports = router;
