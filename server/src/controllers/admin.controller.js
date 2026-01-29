const Issue = require("../models/Issue");

/**
 * GET /admin/issues
 */
exports.getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("reportedBy", "name email")
      .populate("assignedTo", "name email")
      .sort({ createdAt: -1 });

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch issues" });
  }
};

/**
 * PATCH /admin/issues/:id/assign
 */
exports.assignIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.assignedTo = req.body.adminId;
    issue.status = "assigned";

    issue.statusHistory.push({
      status: "assigned",
      remark: "Issue assigned to admin",
      updatedBy: req.user._id
    });

    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Assignment failed" });
  }
};

/**
 * PATCH /admin/issues/:id/status
 */
exports.updateIssueStatus = async (req, res) => {
  try {
    const { status, remark } = req.body;

    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.status = status;
    issue.statusHistory.push({
      status,
      remark,
      updatedBy: req.user._id
    });

    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Status update failed" });
  }
};

/**
 * PATCH /admin/issues/:id/merge
 */
exports.mergeIssues = async (req, res) => {
  try {
    const { parentIssueId } = req.body;

    const issue = await Issue.findById(req.params.id);
    const parent = await Issue.findById(parentIssueId);

    if (!issue || !parent) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.isDuplicate = true;
    issue.parentIssue = parent._id;

    // preserve reporters
    parent.reporters = Array.from(
      new Set([...parent.reporters, ...issue.reporters])
    );

    await issue.save();
    await parent.save();

    res.json({ message: "Issue merged successfully" });
  } catch (err) {
    res.status(500).json({ message: "Merge failed" });
  }
};
