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
import BackButton from "../../components/common/BackButton";

const categoryColors = {
  Plumbing: "#38bdf8",
  Electrical: "#facc15",
  Internet: "#a78bfa",
  Furniture: "#2dd4bf",
  Maintenance: "#fb923c",
  Other: "#cbd5f5",
};

const categories = [
  { label: "Plumbing", icon: Droplets },
  { label: "Electrical", icon: Zap },
  { label: "Internet", icon: Wifi },
  { label: "Furniture", icon: Armchair },
  { label: "Maintenance", icon: Wrench },
  { label: "Other", icon: AlertCircle },
];

const priorityStyles = {
  Low: { bg: "#22c55e", text: "#052e16" },
  Medium: { bg: "#3b82f6", text: "#eff6ff" },
  High: { bg: "#f59e0b", text: "#451a03" },
  Emergency: { bg: "#ef4444", text: "#fff1f2" },
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

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* HEADER */}
          <h1 style={{ display: "flex", alignItems: "center", margin: 0 }}>
            <BackButton />
            Report an Issue
          </h1>

          <p style={{ margin: "12px 0 24px" }}>
            Provide accurate details to help resolve the issue quickly.
          </p>

          {/* rest of the form stays exactly the same */}
        </div>
      </section>
    </>
  );
};

export default ReportIssue;
