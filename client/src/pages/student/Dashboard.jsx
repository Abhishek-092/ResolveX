import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ClipboardList,
  Megaphone,
  PlusCircle,
  Search,
  Layers,
} from "lucide-react";

import Navbar from "../../components/common/Navbar.jsx";

const actionButtonStyle = {
  marginTop: "14px",
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.14)",
  textDecoration: "none",
  color: "inherit",
};

const StudentDashboard = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <h1 style={{ marginBottom: "8px" }}>Student Dashboard</h1>
            <p style={{ opacity: 0.85 }}>
              Track reported issues, view announcements, and take action.
            </p>
          </div>

          {/* PRIMARY ACTION */}
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "20px 24px",
              marginBottom: "42px",
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.22), rgba(255,255,255,0.10))",
            }}
          >
            <div>
              <h2 style={{ marginBottom: "4px", fontSize: "18px" }}>
                Report an Issue
              </h2>
              <p style={{ opacity: 0.9, fontSize: "14px" }}>
                Submit an infrastructure issue for resolution.
              </p>
            </div>

            <Link
              to="/student/report"
              className="btn-primary"
              style={{
                padding: "10px 16px",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <PlusCircle size={16} />
              Report Issue
            </Link>
          </div>

          {/* SECONDARY ACTIONS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
              marginBottom: "44px",
            }}
          >
            {/* My Issues */}
            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,197,94,0.20), rgba(255,255,255,0.10))",
              }}
            >
              <ClipboardList size={26} />
              <h3 style={{ marginTop: "12px" }}>My Issues</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                View status updates on issues you’ve reported.
              </p>
              <Link to="/student/issues" style={actionButtonStyle}>
                View My Issues
              </Link>
            </div>

            {/* Announcements */}
            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(135deg, rgba(251,146,60,0.22), rgba(255,255,255,0.10))",
              }}
            >
              <Megaphone size={26} />
              <h3 style={{ marginTop: "12px" }}>Announcements</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Important notices from campus management.
              </p>
              <Link to="/student/announcements" style={actionButtonStyle}>
                View Announcements
              </Link>
            </div>

            {/* Lost & Found */}
            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45,212,191,0.22), rgba(255,255,255,0.10))",
              }}
            >
              <Search size={26} />
              <h3 style={{ marginTop: "12px" }}>Lost & Found</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Report lost items or claim items found on campus.
              </p>
              <Link to="/student/lost-found" style={actionButtonStyle}>
                Open Lost & Found
              </Link>
            </div>
          </div>

          {/* OVERVIEW / CAMPUS ISSUES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "22px",
            }}
          >
            {/* Campus Issues (MATCHES IssuesFeed) */}
            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(135deg, rgba(167,139,250,0.24), rgba(255,255,255,0.10))",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Layers size={22} />
                <h3>Campus Issues</h3>
              </div>

              <p style={{ marginTop: "10px", opacity: 0.85 }}>
                Publicly reported infrastructure issues visible to all students.
              </p>

              <ul
                style={{
                  marginTop: "14px",
                  lineHeight: "1.8",
                  opacity: 0.9,
                }}
              >
                <li>
                  <strong>2</strong> public issues currently in progress
                </li>
                <li>
                  <strong>1</strong> newly reported public issue
                </li>
                <li>
                  <strong>5</strong> public issues resolved
                </li>
              </ul>

              <Link
                to="/student/issues/feed"
                style={{
                  marginTop: "16px",
                  display: "inline-block",
                  padding: "9px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.18)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                View all campus issues
              </Link>
            </div>

            {/* Alerts */}
            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(135deg, rgba(239,68,68,0.18), rgba(255,255,255,0.10))",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AlertTriangle size={22} />
                <h3>Recent Alerts</h3>
              </div>

              <p style={{ marginTop: "12px", opacity: 0.9 }}>
                Water maintenance scheduled tomorrow in Hostel B.
              </p>

              <p
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  opacity: 0.75,
                }}
              >
                Posted by Management · 3 hours ago
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
