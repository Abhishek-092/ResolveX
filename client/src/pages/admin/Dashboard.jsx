import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ClipboardList,
  BarChart3,
  Megaphone,
  Clock,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "42px" }}>
            <h1 style={{ marginBottom: "6px" }}>Management Dashboard</h1>
            <p style={{ opacity: 0.85, maxWidth: "620px" }}>
              Monitor campus issues, announcements, and overall operational
              health from a single view.
            </p>
          </div>

          {/* EMERGENCY STRIP */}
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              marginBottom: "44px",
              borderLeft: "4px solid #ef4444",
              background:
                "linear-gradient(90deg, rgba(239,68,68,0.12), rgba(255,255,255,0.04))",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <AlertTriangle size={24} color="#ef4444" />
              <div>
                <strong style={{ fontSize: "15px" }}>
                  Emergency Issues Pending
                </strong>
                <p style={{ fontSize: "14px", opacity: 0.85 }}>
                  2 emergency issues require immediate action.
                </p>
              </div>
            </div>

            <Link
              to="/admin/manage-issues"
              className="btn-primary"
              style={{ padding: "10px 18px", fontSize: "14px" }}
            >
              Review Now
            </Link>
          </div>

          {/* QUICK ACTIONS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
              marginBottom: "44px",
            }}
          >
            {/* MANAGE ISSUES */}
            <div className="glass">
              <ClipboardList size={26} color="#38bdf8" />
              <h3 style={{ marginTop: "14px" }}>Manage Issues</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Assign, update, and close reported issues.
              </p>

              <Link
                to="/admin/manage-issues"
                style={{
                  marginTop: "16px",
                  display: "inline-block",
                  padding: "9px 16px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.1)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Open Issue Queue →
              </Link>
            </div>

            {/* ANNOUNCEMENTS */}
            <div className="glass">
              <Megaphone size={26} color="#a78bfa" />
              <h3 style={{ marginTop: "14px" }}>Announcements</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Post and manage student announcements.
              </p>

              <Link
                to="/admin/announcements"
                style={{
                  marginTop: "16px",
                  display: "inline-block",
                  padding: "9px 16px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.1)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Manage Announcements →
              </Link>
            </div>

            {/* ANALYTICS */}
            <div className="glass">
              <BarChart3 size={26} color="#22c55e" />
              <h3 style={{ marginTop: "14px" }}>Analytics</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                View trends, response times, and performance metrics.
              </p>

              <Link
                to="/admin/analytics"
                style={{
                  marginTop: "16px",
                  display: "inline-block",
                  padding: "9px 16px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.1)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                View Analytics →
              </Link>
            </div>
          </div>

          {/* SUMMARY */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "22px",
            }}
          >
            <div className="glass">
              <h3>Issue Summary</h3>
              <ul style={{ marginTop: "16px", lineHeight: "1.9", opacity: 0.9 }}>
                <li>
                  <strong>14</strong> new issues today
                </li>
                <li>
                  <strong>6</strong> issues currently in progress
                </li>
                <li>
                  <strong>82%</strong> issues resolved within SLA
                </li>
              </ul>
            </div>

            <div className="glass">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={20} color="#facc15" />
                <h3>Operational Notes</h3>
              </div>

              <p style={{ marginTop: "14px", opacity: 0.9 }}>
                Peak issue reporting observed between 7 PM – 10 PM.
                <br />
                Consider increasing night maintenance staff.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
