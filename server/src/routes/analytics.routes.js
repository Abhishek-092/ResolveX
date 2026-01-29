const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const { requireAdmin } = require("../middlewares/role.middleware");

const {
  getAnalyticsOverview
} = require("../controllers/analytics.controller");

const router = express.Router();

router.get("/overview", protect, requireAdmin, getAnalyticsOverview);

module.exports = router;
