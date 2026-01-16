const express = require("express");
const router = express.Router();
const Experience = require("../models/experience.model");

// GET: Get all experiences
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.status(200).json({ data: experiences });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch experiences",
      error: error.message,
    });
  }
});

// GET: Get single experience by ID
router.get("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json({ data: experience });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch experience",
      error: error.message,
    });
  }
});

// POST: Create new experience
router.post("/", async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({
      message: "Experience created successfully",
      data: experience,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create experience",
      error: error.message,
    });
  }
});

// PUT: Update experience by ID
router.put("/:id", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json({
      message: "Experience updated successfully",
      data: experience,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update experience",
      error: error.message,
    });
  }
});

// DELETE: Delete experience by ID
router.delete("/:id", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete experience",
      error: error.message,
    });
  }
});

module.exports = router;
