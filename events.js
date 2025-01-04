const express = require("express");
const router = express.Router();
const { getEvents, addEvent, deleteEvent } = require("../controllers/eventController");
const { verifyAdmin } = require("../middleware/authMiddleware");

// Public route - Fetch all events
router.get("/", getEvents);

// Admin-only route - Add an event
router.post("/", verifyAdmin, addEvent);

// Admin-only route - Delete an event
router.delete("/:id", verifyAdmin, deleteEvent);

module.exports = router;
