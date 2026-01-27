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

const ReportIssue = () => {
  const [form, setForm] = useState({
    category: "",
    priority: "Medium",
    description: "",
    visibility: "public",
    image: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FRONTEND ONLY (mock)
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
            {/* Category */}
            <div style={{ marginBottom: "20px" }}>
              <label>Issue Category</label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "12px",
                  marginTop: "10px",
                }}
              >
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat.label}
                    onClick={() =>
                      setForm({ ...form, category: cat.label })
                    }
                    className="glass"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border:
                        form.category === cat.label
                          ? "1px solid #5eead4"
                          : "1px solid transparent",
                    }}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Priority */}
            <div style={{ marginBottom: "20px" }}>
              <label>Priority</label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "12px",
                }}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Emergency</option>
              </select>
            </div>

            {/* Description */}
            <div style={{ marginBottom: "20px" }}>
              <label>Issue Description</label>
              <textarea
                name="description"
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the issue in detail..."
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "12px",
                }}
              />
            </div>

            {/* Image Upload */}
            <div style={{ marginBottom: "20px" }}>
              <label>Attach Image (optional)</label>
              <div
                className="glass"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
              >
                <Upload size={18} />
                <span>Upload an image</span>
              </div>
            </div>

            {/* Visibility */}
            <div style={{ marginBottom: "28px" }}>
              <label>Visibility</label>

              <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
                <button
                  type="button"
                  className="glass"
                  onClick={() =>
                    setForm({ ...form, visibility: "public" })
                  }
                  style={{
                    border:
                      form.visibility === "public"
                        ? "1px solid #5eead4"
                        : "1px solid transparent",
                  }}
                >
                  <Eye size={16} /> Public
                </button>

                <button
                  type="button"
                  className="glass"
                  onClick={() =>
                    setForm({ ...form, visibility: "private" })
                  }
                  style={{
                    border:
                      form.visibility === "private"
                        ? "1px solid #5eead4"
                        : "1px solid transparent",
                  }}
                >
                  <EyeOff size={16} /> Private
                </button>
              </div>
            </div>

            {/* Location (Read-only) */}
            <div className="glass" style={{ marginBottom: "28px" }}>
              <h3>Issue Location</h3>
              <p style={{ marginTop: "6px" }}>
                Hostel A · Room 204
              </p>
              <p style={{ fontSize: "14px", opacity: 0.75 }}>
                This is auto-attached to your report.
              </p>
            </div>

            {/* Submit */}
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
