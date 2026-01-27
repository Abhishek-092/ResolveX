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
    locationType: "my-room",
    otherLocation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue reported successfully (mock)");
  };

  const selectedStyle = {
    background: "#ffffff",
    color: "#0f172a",
    border: "1px solid #5eead4",
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
                    style={
                      form.category === cat.label ? selectedStyle : {}
                    }
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
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: e.target.value })
                }
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

            {/* Upload Image */}
            <div style={{ marginBottom: "20px" }}>
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

            {/* Visibility */}
            <div style={{ marginBottom: "20px" }}>
              <label>Visibility</label>
              <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
                <button
                  type="button"
                  className="glass"
                  onClick={() =>
                    setForm({ ...form, visibility: "public" })
                  }
                  style={
                    form.visibility === "public" ? selectedStyle : {}
                  }
                >
                  <Eye size={16} /> Public
                </button>

                <button
                  type="button"
                  className="glass"
                  onClick={() =>
                    setForm({ ...form, visibility: "private" })
                  }
                  style={
                    form.visibility === "private" ? selectedStyle : {}
                  }
                >
                  <EyeOff size={16} /> Private
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="glass" style={{ marginBottom: "28px" }}>
              <h3>Issue Location</h3>

              <div style={{ marginTop: "12px" }}>
                <label>
                  <input
                    type="radio"
                    checked={form.locationType === "my-room"}
                    onChange={() =>
                      setForm({ ...form, locationType: "my-room" })
                    }
                  />{" "}
                  My Room (Hostel A · Room 204)
                </label>
              </div>

              <div style={{ marginTop: "10px" }}>
                <label>
                  <input
                    type="radio"
                    checked={form.locationType === "other"}
                    onChange={() =>
                      setForm({ ...form, locationType: "other" })
                    }
                  />{" "}
                  Other Area
                </label>
              </div>

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
