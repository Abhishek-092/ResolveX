const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const { requireAdmin } = require("../middlewares/role.middleware");

const {
  reportLost,
  reportFound,
  getApprovedItems,
  getMyItems,
  adminGetAll,
  approveItem,
  rejectItem,
  markClaimed
} = require("../controllers/lostFound.controller");

const router = express.Router();

/**
 * STUDENT
 */
router.post("/lost", protect, reportLost);
router.post("/found", protect, reportFound);
router.get("/", protect, getApprovedItems);
router.get("/my", protect, getMyItems);

/**
 * ADMIN
 */
router.get("/admin", protect, requireAdmin, adminGetAll);
router.patch("/:id/approve", protect, requireAdmin, approveItem);
router.patch("/:id/reject", protect, requireAdmin, rejectItem);
router.patch("/:id/mark-claimed", protect, requireAdmin, markClaimed);

module.exports = router;
