import {
  AlertTriangle,
  ClipboardList,
  Clock,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const statCardStyle = {
  padding: "20px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "36px" }}>
            <h1 style={{ marginBottom: "6px" }}>Management Dashboard</h1>
            <p style={{ opacity: 0.85 }}>
              Monitor campus issues, prioritize actions, and track resolution
              performance.
            </p>
          </div>

          {/* TOP METRICS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {/* New Issues */}
            <div className="glass" style={statCardStyle}>
              <div>
                <p style={{ fontSize: "13px", opacity: 0.75 }}>New Issues</p>
                <h2 style={{ marginTop: "6px" }}>12</h2>
              </div>
              <ClipboardList size={26} />
            </div>

            {/* Emergency */}
            <div
              className="glass"
              style={{
                ...statCardStyle,
                background: "rgba(239,68,68,0.15)",
                border: "1px solid rgba(239,68,68,0.35)",
              }}
            >
              <div>
                <p style={{ fontSize: "13px", opacity: 0.8 }}>
                  Emergency Issues
                </p>
                <h2 style={{ marginTop: "6px", color: "#fecaca" }}>3</h2>
              </div>
              <AlertTriangle size={26} color="#ef4444" />
            </div>

            {/* In Progress */}
            <div className="glass" style={statCardStyle}>
              <div>
                <p style={{ fontSize: "13px", opacity: 0.75 }}>In Progress</p>
                <h2 style={{ marginTop: "6px" }}>18</h2>
              </div>
              <Clock size={26} />
            </div>

            {/* Resolved */}
            <div className="glass" style={statCardStyle}>
              <div>
                <p style={{ fontSize: "13px", opacity: 0.75 }}>Resolved</p>
                <h2 style={{ marginTop: "6px" }}>64</h2>
              </div>
              <CheckCircle2 size={26} />
            </div>
          </div>

          {/* MAIN GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "24px",
            }}
          >
            {/* RECENT ISSUES */}
            <div className="glass" style={{ padding: "24px" }}>
              <h3 style={{ marginBottom: "16px" }}>Recent Issues</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  {
                    title: "Water leakage in Hostel A",
                    priority: "High",
                    time: "10 minutes ago",
                  },
                  {
                    title: "Power outage in Block C",
                    priority: "Emergency",
                    time: "25 minutes ago",
                  },
                  {
                    title: "WiFi instability in Library",
                    priority: "Medium",
                    time: "1 hour ago",
                  },
                ].map((issue, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: "14px" }}>
                        {issue.title}
                      </strong>
                      <p style={{ fontSize: "12px", opacity: 0.7 }}>
                        {issue.time}
                      </p>
                    </div>

                    <span
                      style={{
                        fontSize: "12px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        background:
                          issue.priority === "Emergency"
                            ? "#ef4444"
                            : issue.priority === "High"
                            ? "#f59e0b"
                            : "#3b82f6",
                        color: "#fff",
                      }}
                    >
                      {issue.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PERFORMANCE */}
            <div className="glass" style={{ padding: "24px" }}>
              <h3 style={{ marginBottom: "16px" }}>Performance Overview</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <p style={{ fontSize: "13px", opacity: 0.75 }}>
                    Avg. Response Time
                  </p>
                  <strong>1h 24m</strong>
                </div>

                <div>
                  <p style={{ fontSize: "13px", opacity: 0.75 }}>
                    Avg. Resolution Time
                  </p>
                  <strong>6h 40m</strong>
                </div>

                <div>
                  <p style={{ fontSize: "13px", opacity: 0.75 }}>
                    Weekly Trend
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#22c55e",
                    }}
                  >
                    <TrendingUp size={18} />
                    <span>Improving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
