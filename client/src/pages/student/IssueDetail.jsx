import { useParams } from "react-router-dom";
import {
  Clock,
  CheckCircle2,
  MessageSquare,
  Eye,
  EyeOff,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* MOCK DATA — simulates API response */
const ISSUES = {
  "1": {
    id: "1",
    title: "Water leakage in bathroom",
    category: "Plumbing",
    description:
      "There is continuous water leakage from the tap in the bathroom, causing water accumulation.",
    priority: "High",
    visibility: "public",
    status: "In Progress",
    reportedOn: "12 Sep 2025, 10:45 AM",
    location: "Hostel A · Room 204",
    remarks:
      "Plumber assigned. Replacement part expected by tomorrow.",
    timeline: [
      { label: "Reported", time: "12 Sep 2025, 10:45 AM", done: true },
      { label: "Assigned", time: "12 Sep 2025, 01:10 PM", done: true },
      { label: "In Progress", time: "13 Sep 2025, 09:30 AM", done: true },
      { label: "Resolved", time: null, done: false },
      { label: "Closed", time: null, done: false },
    ],
    comments: [
      {
        id: 1,
        text: "Facing the same issue in the adjacent room.",
        time: "12 Sep 2025, 02:20 PM",
      },
    ],
  },

  "2": {
    id: "2",
    title: "Tube light not working",
    category: "Electrical",
    description:
      "Tube light in the corridor outside Room 210 is not functioning.",
    priority: "Medium",
    visibility: "private",
    status: "Assigned",
    reportedOn: "10 Sep 2025, 09:15 PM",
    location: "Hostel A · Corridor",
    remarks: null,
    timeline: [
      { label: "Reported", time: "10 Sep 2025, 09:15 PM", done: true },
      { label: "Assigned", time: "11 Sep 2025, 10:00 AM", done: true },
      { label: "In Progress", time: null, done: false },
      { label: "Resolved", time: null, done: false },
      { label: "Closed", time: null, done: false },
    ],
    comments: [],
  },
};

const IssueDetail = () => {
  const { id } = useParams();
  const issue = ISSUES[id];

  if (!issue) {
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <p>Issue not found.</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "24px",
            }}
          >
            <BackButton />
            <h1 style={{ margin: 0 }}>Issue Details</h1>
          </div>

          {/* SUMMARY */}
          <div
            className="glass"
            style={{
              marginBottom: "28px",
              padding: "22px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: "0 0 8px" }}>{issue.title}</h2>
                <p style={{ opacity: 0.9 }}>{issue.description}</p>

                <div
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    opacity: 0.85,
                    lineHeight: 1.6,
                  }}
                >
                  <div>
                    <strong>Location:</strong> {issue.location}
                  </div>
                  <div>
                    <strong>Reported:</strong> {issue.reportedOn}
                  </div>
                </div>
              </div>

              {/* META */}
              <div
                style={{
                  minWidth: "160px",
                  textAlign: "right",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "#f59e0b",
                    color: "#fff",
                  }}
                >
                  {issue.priority}
                </span>
                <br />
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    background: "rgba(255,255,255,0.18)",
                  }}
                >
                  {issue.status}
                </span>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "10px",
                    fontSize: "13px",
                    opacity: 0.85,
                  }}
                >
                  {issue.visibility === "public" ? (
                    <>
                      <Eye size={14} /> Public
                    </>
                  ) : (
                    <>
                      <EyeOff size={14} /> Private
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="glass" style={{ marginBottom: "28px", padding: "22px" }}>
            <h3 style={{ marginTop: 0, marginBottom: "16px" }}>
              Issue Timeline
            </h3>

            {issue.timeline.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  opacity: step.done ? 1 : 0.45,
                  marginBottom: "14px",
                }}
              >
                {step.done ? (
                  <CheckCircle2 size={18} color="#22c55e" />
                ) : (
                  <Clock size={18} />
                )}

                <div>
                  <div style={{ fontWeight: 600 }}>{step.label}</div>
                  {step.time && (
                    <div style={{ fontSize: "13px", opacity: 0.7 }}>
                      {step.time}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* REMARKS */}
          <div className="glass" style={{ marginBottom: "28px", padding: "22px" }}>
            <h3 style={{ marginTop: 0 }}>Management Remarks</h3>
            {issue.remarks ? (
              <p style={{ opacity: 0.9 }}>{issue.remarks}</p>
            ) : (
              <p style={{ opacity: 0.6 }}>No remarks added yet.</p>
            )}
          </div>

          {/* COMMENTS */}
          {issue.visibility === "public" && (
            <div className="glass" style={{ padding: "22px" }}>
              <h3
                style={{
                  marginTop: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <MessageSquare size={18} />
                Community Comments
              </h3>

              {issue.comments.length === 0 ? (
                <p style={{ opacity: 0.6 }}>No comments yet.</p>
              ) : (
                issue.comments.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      marginTop: "14px",
                      paddingTop: "12px",
                      borderTop: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <p style={{ marginBottom: "4px" }}>{c.text}</p>
                    <small style={{ opacity: 0.6 }}>{c.time}</small>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default IssueDetail;
