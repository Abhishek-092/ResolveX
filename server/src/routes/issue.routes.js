const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const {
  createIssue,
  getMyIssues,
  getPublicIssues,
  getIssueById,
  addComment,
  getComments
} = require("../controllers/issue.controller");

const router = express.Router();

// student must be logged in
router.use(protect);

// report issue
router.post("/", createIssue);

// view issues
router.get("/my", getMyIssues);
router.get("/public", getPublicIssues);
router.get("/:id", getIssueById);

// comments (public issues only)
router.post("/:id/comments", addComment);
router.get("/:id/comments", getComments);

module.exports = router;
