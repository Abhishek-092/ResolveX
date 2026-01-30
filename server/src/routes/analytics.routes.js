const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const { requireAdmin } = require("../middlewares/role.middleware");
const { getOverview } = require("../controllers/analytics.controller");

const router = express.Router();

router.get("/overview", protect, requireAdmin, getOverview);

module.exports = router;
