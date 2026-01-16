const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.model");

// POST: Create new contact message
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      message: "Contact message sent successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to send message",
      error: error.message,
    });
  }
});

// GET: Get all contact messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ data: contacts });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
});

// GET: Get single contact by ID
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ data: contact });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch contact",
      error: error.message,
    });
  }
});

// DELETE: Delete contact by ID
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete contact",
      error: error.message,
    });
  }
});

module.exports = router;
