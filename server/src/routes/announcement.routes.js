import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/role.middleware.js";
import {
  getAnnouncements,
  createAnnouncement,
  getAdminAnnouncements,
  deleteAnnouncement
} from "../controllers/announcement.controller.js";

const router = express.Router();

/**
 * STUDENT – view announcements
 * GET /announcements
 */
router.get("/", protect, getAnnouncements);

/**
 * ADMIN
 */
router.post("/admin", protect, requireAdmin, createAnnouncement);
router.get("/admin", protect, requireAdmin, getAdminAnnouncements);
router.delete("/admin/:id", protect, requireAdmin, deleteAnnouncement);

export default router;
