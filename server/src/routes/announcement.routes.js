const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const { requireAdmin } = require("../middlewares/role.middleware");
const {
  getAnnouncements,
  createAnnouncement,
  getAdminAnnouncements,
  deleteAnnouncement
} = require("../controllers/announcement.controller");

const router = express.Router();

/**
 * Student: view announcements
 */
router.get("/", protect, getAnnouncements);

/**
 * Admin routes
 */
router.post("/admin", protect, requireAdmin, createAnnouncement);
router.get("/admin", protect, requireAdmin, getAdminAnnouncements);
router.delete("/admin/:id", protect, requireAdmin, deleteAnnouncement);

module.exports = router;
