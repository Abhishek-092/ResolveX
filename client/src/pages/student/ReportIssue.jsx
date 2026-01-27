import { useState } from "react";
import {
  Wrench,
  Zap,
  Droplets,
  Wifi,
  Armchair,
  AlertCircle,
  Upload,
  Eye,
  EyeOff,
  MapPin,
  AlertTriangle,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const categories = [
  { label: "Plumbing", icon: <Droplets size={18} /> },
  { label: "Electrical", icon: <Zap size={18} /> },
  { label: "Internet", icon: <Wifi size={18} /> },
  { label: "Furniture", icon: <Armchair size={18} /> },
  { label: "Maintenance", icon: <Wrench size={18} /> },
  { label: "Other", icon: <AlertCircle size={18} /> },
];

const priorityStyles = {
  Low: { bg: "#22c55e", color: "#052e16" },
  Medium: { bg: "#3b82f6", color: "#eff6ff" },
  High: { bg: "#f59e0b", color: "#451a03" },
  Emergency: { bg: "#ef4444", color: "#fff1f2" },
};

const ReportIssue = () => {
  const [form, setForm] = useState({
    category: "",
    priority: "Medium",
    description: "",
    visibility: "public",
    locationType: "my-room",
    otherLocation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue reported successfully (mock)");
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* Header */}
          <div style={{ marginBottom: "28px" }}>
            <h1>Report an Issue</h1>
            <p style={{ marginTop: "6px" }}>
              Provide accurate details to help resolve the issue quickly.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* ================= CATEGORY ================= */}
            <div style={{ marginBottom: "22px" }}>
              <label>Issue Category</label>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "12px",
                  marginTop: "10px",
                }}
              >
                {categories.map((cat) => {
                  const active = form.category === cat.label;
                  return (
                    <button
                      key={cat.label}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, category: cat.label })
                      }
                      style={{
                        padding: "14px",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                        background: active
                          ? "#22d3ee"
                          : "rgba(255,255,255,0.12)",
                        color: active ? "#022c22" : "#e5e7eb",
                        border: active
                          ? "2px solid #22d3ee"
                          : "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      {cat.icon}
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ================= PRIORITY ================= */}
            <div style={{ marginBottom: "22px" }}>
              <label>Priority</label>

              <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
                {Object.keys(priorityStyles).map((level) => {
                  const active = form.priority === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, priority: level })
                      }
                      style={{
                        padding: "12px 18px",
                        borderRadius: "14px",
                        border: "none",
                        cursor: "pointer",
                        background: active
                          ? priorityStyles[level].bg
                          : "rgba(255,255,255,0.12)",
                        color: active
                          ? priorityStyles[level].color
                          : "#e5e7eb",
                      }}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ============ EMERGENCY WARNING ============ */}
            {form.priority === "Emergency" && (
              <div
                style={{
                  marginBottom: "22px",
                  padding: "14px",
                  borderRadius: "14px",
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid #ef4444",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <AlertTriangle size={20} color="#ef4444" />
                <p style={{ fontSize: "14px", color: "#fecaca" }}>
                  Select <strong>Emergency</strong> only for actual medical
                  emergencies or safety hazards. This triggers immediate
                  administrative alerts. Any false alarm may lead to
                  disciplinary action.
                </p>
              </div>
            )}

            {/* ================= DESCRIPTION ================= */}
            <div style={{ marginBottom: "22px" }}>
              <label>Issue Description</label>
              <textarea
                rows={4}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Describe the issue in detail..."
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "12px",
                }}
              />
            </div>

            {/* ================= IMAGE UPLOAD ================= */}
            <div style={{ marginBottom: "22px" }}>
              <label>Attach Image (optional)</label>
              <button
                type="button"
                style={{
                  marginTop: "8px",
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  background: "#ffffff",
                  color: "#0f172a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Upload size={18} />
                Upload an image
              </button>
            </div>

            {/* ================= VISIBILITY ================= */}
            <div style={{ marginBottom: "22px" }}>
              <label>Visibility</label>

              <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
                {["public", "private"].map((v) => {
                  const active = form.visibility === v;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, visibility: v })
                      }
                      style={{
                        padding: "12px 18px",
                        borderRadius: "14px",
                        cursor: "pointer",
                        background: active
                          ? "#22d3ee"
                          : "rgba(255,255,255,0.12)",
                        color: active ? "#022c22" : "#e5e7eb",
                        border: active
                          ? "2px solid #22d3ee"
                          : "1px solid rgba(255,255,255,0.25)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {v === "public" ? (
                        <Eye size={16} />
                      ) : (
                        <EyeOff size={16} />
                      )}
                      {v === "public" ? "Public" : "Private"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ================= LOCATION ================= */}
            <div className="glass" style={{ marginBottom: "28px" }}>
              <h3>Issue Location</h3>

              <label style={{ display: "block", marginTop: "10px" }}>
                <input
                  type="radio"
                  checked={form.locationType === "my-room"}
                  onChange={() =>
                    setForm({ ...form, locationType: "my-room" })
                  }
                />{" "}
                My Room (Hostel A · Room 204)
              </label>

              <label style={{ display: "block", marginTop: "10px" }}>
                <input
                  type="radio"
                  checked={form.locationType === "other"}
                  onChange={() =>
                    setForm({ ...form, locationType: "other" })
                  }
                />{" "}
                Other Area
              </label>

              {form.locationType === "other" && (
                <div style={{ marginTop: "12px" }}>
                  <div className="input-box">
                    <MapPin size={18} />
                    <input
                      placeholder="Specify room or common area"
                      value={form.otherLocation}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          otherLocation: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ================= SUBMIT ================= */}
            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Submit Issue
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ReportIssue;
