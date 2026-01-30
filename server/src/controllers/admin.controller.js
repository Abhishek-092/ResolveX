import Issue from "../models/Issue.js";

/**
 * GET /admin/issues
 */
const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("reportedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch issues" });
  }
};

/**
 * PATCH /admin/issues/:id/assign
 */
const assignIssue = async (req, res) => {
  try {
    const { assignedTo } = req.body;

    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.assignedTo = assignedTo;
    issue.status = "assigned";
    issue.statusHistory.push({
      status: "assigned",
      remark: "Issue assigned",
      updatedBy: req.user._id,
      timestamp: new Date()
    });

    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Failed to assign issue" });
  }
};

/**
 * PATCH /admin/issues/:id/status
 */
const updateIssueStatus = async (req, res) => {
  try {
    const { status, remark } = req.body;

    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.status = status;
    issue.statusHistory.push({
      status,
      remark: remark || `Status updated to ${status}`,
      updatedBy: req.user._id,
      timestamp: new Date()
    });

    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
};

/**
 * PATCH /admin/issues/:id/merge
 */
const mergeIssues = async (req, res) => {
  try {
    const { duplicateIds } = req.body;

    const parentIssue = await Issue.findById(req.params.id);
    if (!parentIssue) {
      return res.status(404).json({ message: "Parent issue not found" });
    }

    const duplicates = await Issue.find({ _id: { $in: duplicateIds } });

    duplicates.forEach((dup) => {
      parentIssue.reporters.push(...dup.reporters);
      dup.status = "merged";
      dup.mergedInto = parentIssue._id;
    });

    parentIssue.reporters = [
      ...new Set(parentIssue.reporters.map((id) => id.toString()))
    ];

    await parentIssue.save();
    await Promise.all(duplicates.map((d) => d.save()));

    res.json(parentIssue);
  } catch (err) {
    res.status(500).json({ message: "Merge failed" });
  }
};

export {
  getAllIssues,
  assignIssue,
  updateIssueStatus,
  mergeIssues
};
