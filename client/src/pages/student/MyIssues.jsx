import { Link } from "react-router-dom";
import {
  Droplets,
  Zap,
  Wifi,
  Armchair,
  Wrench,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const issues = [
  {
    id: 1,
    category: "Plumbing",
    description: "Water leakage from the washroom tap.",
    priority: "High",
    status: "In Progress",
    visibility: "public",
    date: "12 Sep 2025",
  },
  {
    id: 2,
    category: "Electrical",
    description: "Tube light not working in the corridor.",
    priority: "Medium",
    status: "Assigned",
    visibility: "public",
    date: "10 Sep 2025",
  },
  {
    id: 3,
    category: "Internet",
    description: "WiFi disconnects frequently during night hours.",
    priority: "Low",
    status: "Resolved",
    visibility: "private",
    date: "05 Sep 2025",
  },
];

const categoryIcons = {
  Plumbing: <Droplets size={18} />,
  Electrical: <Zap size={18} />,
  Internet: <Wifi size={18} />,
  Furniture: <Armchair size={18} />,
  Maintenance: <Wrench size={18} />,
  Other: <AlertCircle size={18} />,
};

const priorityColors = {
  Low: "#22c55e",
  Medium: "#3b82f6",
  High: "#f59e0b",
  Emergency: "#ef4444",
};

const statusColors = {
  Reported: "#64748b",
  Assigned: "#38bdf8",
  "In Progress": "#f59e0b",
  Resolved: "#22c55e",
  Closed: "#94a3b8",
};

const MyIssues = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* Header */}
          <div style={{ marginBottom: "28px" }}>
            <h1>My Issues</h1>
            <p style={{ marginTop: "6px" }}>
              Track the status of issues you have reported.
            </p>
          </div>

          {/* Issues List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {issues.map((issue) => (
              <Link
                key={issue.id}
                to={`/student/issues/${issue.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  {/* Left */}
                  <div style={{ display: "flex", gap: "14px", flex: 1 }}>
                    <div>{categoryIcons[issue.category]}</div>

                    <div>
                      <h3 style={{ marginBottom: "4px" }}>
                        {issue.category}
                      </h3>
                      <p style={{ fontSize: "14px", opacity: 0.85 }}>
                        {issue.description}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          opacity: 0.7,
                          marginTop: "6px",
                        }}
                      >
                        Reported on {issue.date}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "8px",
                      minWidth: "160px",
                    }}
                  >
                    {/* Priority */}
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: priorityColors[issue.priority],
                        color: "#0f172a",
                      }}
                    >
                      {issue.priority}
                    </span>

                    {/* Status */}
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: statusColors[issue.status],
                      }}
                    >
                      {issue.status}
                    </span>

                    {/* Visibility */}
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        opacity: 0.75,
                      }}
                    >
                      {issue.visibility === "public" ? (
                        <Eye size={14} />
                      ) : (
                        <EyeOff size={14} />
                      )}
                      {issue.visibility === "public" ? "Public" : "Private"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State (future-ready) */}
          {issues.length === 0 && (
            <div className="glass" style={{ textAlign: "center" }}>
              <h3>No issues reported yet</h3>
              <p style={{ marginTop: "8px" }}>
                When you report an issue, it will appear here.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyIssues;
