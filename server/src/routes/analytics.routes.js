const express = require("express");
const { protect } = require("../middlewares/auth.middleware.js");
const { requireAdmin } = require("../middlewares/role.middleware.js");
const { getOverview } = require("../controllers/analytics.controller.js");

const router = express.Router();

router.get("/overview", protect, requireAdmin, getOverview);

module.exports = router;
