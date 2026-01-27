import { useParams } from "react-router-dom";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Eye,
  EyeOff,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/**
 * Mock data (replace with API later)
 * DO NOT redesign structure later
 */
const issue = {
  id: "ISS-204",
  title: "Water leakage in bathroom",
  category: "Plumbing",
  description:
    "There is continuous water leakage from the tap in the bathroom, causing water accumulation on the floor.",
  priority: "High",
  visibility: "public",
  status: "In Progress",
  reportedOn: "12 Sep 2025, 10:45 AM",
  location: "Hostel A · Room 204",
  remarks:
    "Plumber has been assigned. Replacement part is expected by tomorrow.",
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
      author: "Student",
      text: "Facing the same issue in the adjacent room as well.",
      time: "12 Sep 2025, 02:20 PM",
    },
    {
      id: 2,
      author: "Student",
      text: "Water pressure is also very low since morning.",
      time: "12 Sep 2025, 06:40 PM",
    },
  ],
};

const IssueDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <h1
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <BackButton />
            Issue Details
          </h1>

          {/* ISSUE SUMMARY */}
          <div className="glass" style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div>
                <h2 style={{ margin: "0 0 6px" }}>{issue.title}</h2>
                <p style={{ opacity: 0.8 }}>{issue.description}</p>

                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  <strong>Location:</strong> {issue.location}
                </p>

                <p style={{ fontSize: "14px" }}>
                  <strong>Reported on:</strong> {issue.reportedOn}
                </p>
              </div>

              <div style={{ textAlign: "right" }}>
                <span className="badge">{issue.priority}</span>
                <br />
                <span className="badge secondary">{issue.status}</span>
                <br />
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "8px",
                    fontSize: "14px",
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
                </span>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="glass" style={{ marginBottom: "24px" }}>
            <h3 style={{ marginTop: 0 }}>Issue Timeline</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {issue.timeline.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    opacity: step.done ? 1 : 0.4,
                  }}
                >
                  {step.done ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <Clock size={18} />
                  )}
                  <div>
                    <strong>{step.label}</strong>
                    {step.time && (
                      <div style={{ fontSize: "13px", opacity: 0.8 }}>
                        {step.time}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ADMIN REMARKS */}
          <div className="glass" style={{ marginBottom: "24px" }}>
            <h3 style={{ marginTop: 0 }}>Management Remarks</h3>

            {issue.remarks ? (
              <p>{issue.remarks}</p>
            ) : (
              <p style={{ opacity: 0.6 }}>
                No remarks added by management yet.
              </p>
            )}
          </div>

          {/* COMMENTS (PUBLIC ONLY) */}
          {issue.visibility === "public" && (
            <div className="glass">
              <h3 style={{ marginTop: 0 }}>
                <MessageSquare size={18} style={{ marginRight: "6px" }} />
                Community Comments
              </h3>

              {issue.comments.length === 0 ? (
                <p style={{ opacity: 0.6 }}>
                  No comments yet. Be the first to add context.
                </p>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {issue.comments.map((c) => (
                    <div key={c.id}>
                      <p style={{ marginBottom: "4px" }}>{c.text}</p>
                      <small style={{ opacity: 0.6 }}>{c.time}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default IssueDetail;
