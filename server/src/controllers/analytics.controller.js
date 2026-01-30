import Issue from "../models/Issue.js";

/**
 * GET /admin/analytics/overview
 * Admin-only analytics
 */
const getAnalyticsOverview = async (req, res) => {
  try {
    // Total issues
    const totalIssues = await Issue.countDocuments();

    // Status counts
    const statusCounts = await Issue.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    // Category frequency
    const categoryCounts = await Issue.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      }
    ]);

    // Priority breakdown
    const priorityCounts = await Issue.aggregate([
      {
        $group: {
          _id: "$priority",
          count: { $sum: 1 }
        }
      }
    ]);

    // Emergency trend (simple)
    const emergencyIssues = await Issue.countDocuments({
      priority: "emergency"
    });

    res.json({
      totalIssues,
      statusCounts,
      categoryCounts,
      priorityCounts,
      emergencyIssues
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load analytics" });
  }
};

export { getAnalyticsOverview };
