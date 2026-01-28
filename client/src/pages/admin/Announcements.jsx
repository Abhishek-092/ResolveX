import { PlusCircle, Megaphone, Archive } from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* Mock data */
const announcements = [
  {
    id: 1,
    title: "Water Maintenance Schedule",
    body: "Water supply will be interrupted tomorrow from 9 AM to 1 PM.",
    date: "12 Sep 2025",
    status: "Active",
  },
  {
    id: 2,
    title: "Internet Downtime",
    body: "Internet services will be unavailable tonight after 12 AM.",
    date: "10 Sep 2025",
    status: "Archived",
  },
];

const AdminAnnouncements = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "28px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <BackButton />
              Announcements
            </h1>

            <p style={{ opacity: 0.8 }}>
              Create and manage announcements visible to students.
            </p>
          </div>

          {/* CREATE BUTTON */}
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 22px",
              marginBottom: "32px",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "4px" }}>New Announcement</h3>
              <p style={{ fontSize: "14px", opacity: 0.8 }}>
                Notify students about important updates.
              </p>
            </div>

            <button
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <PlusCircle size={16} />
              Create
            </button>
          </div>

          {/* LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {announcements.map((a) => (
              <div key={a.id} className="glass" style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      <Megaphone size={18} />
                      <h3 style={{ margin: 0 }}>{a.title}</h3>
                    </div>

                    <p style={{ fontSize: "14px", opacity: 0.85 }}>
                      {a.body}
                    </p>

                    <p style={{ fontSize: "12px", opacity: 0.6, marginTop: "6px" }}>
                      Posted on {a.date}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        background:
                          a.status === "Active"
                            ? "#22c55e"
                            : "rgba(255,255,255,0.25)",
                        color:
                          a.status === "Active" ? "#022c22" : "#e5e7eb",
                      }}
                    >
                      {a.status}
                    </span>

                    {a.status === "Active" && (
                      <button
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          background: "transparent",
                          border: "none",
                          color: "#cbd5f5",
                          cursor: "pointer",
                        }}
                      >
                        <Archive size={14} />
                        Archive
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminAnnouncements;
