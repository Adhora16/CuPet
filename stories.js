const express = require("express");
const router = express.Router();
const { getStories, addStory, deleteStory } = require("../controllers/storyController");
const { verifyAdmin } = require("../middleware/authMiddleware");

// Public route - Fetch all stories
router.get("/", getStories);

// Admin-only route - Add a success story
router.post("/", verifyAdmin, addStory);

// Admin-only route - Delete a success story
router.delete("/:id", verifyAdmin, deleteStory);

module.exports = router;
