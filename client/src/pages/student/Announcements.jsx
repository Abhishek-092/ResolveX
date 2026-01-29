import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import { Megaphone, Calendar } from "lucide-react";

/* Mock announcements (API later) */
const announcements = [
  {
    id: 1,
    title: "Water Supply Interruption",
    message:
      "Water supply will be temporarily unavailable from 2:00 PM to 5:00 PM today due to scheduled maintenance work.",
    date: "Today · 11:30 AM",
    target: "Hostel B",
  },
  {
    id: 2,
    title: "Internet Maintenance",
    message:
      "Internet connectivity may be unstable between 12:00 AM and 2:00 AM tonight due to network upgrades.",
    date: "Yesterday · 6:10 PM",
    target: "All Campuses",
  },
  {
    id: 3,
    title: "Cleaning Schedule Update",
    message:
      "Deep cleaning of common washrooms will take place tomorrow morning. Please cooperate with the housekeeping staff.",
    date: "14 Sep 2025 · 9:00 AM",
    target: "Hostel A",
  },
];

const StudentAnnouncements = () => {
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
              marginBottom: "10px",
            }}
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                margin: 0,
                marginBottom: "10px",
              }}
            >
              <BackButton />
              Announcements
            </h1>
          </div>

          <p style={{ marginBottom: "28px", opacity: 0.85 }}>
            Official notices and updates from campus management.
          </p>

          {/* ANNOUNCEMENTS LIST */}
          {announcements.length === 0 ? (
            <div className="glass">
              <p style={{ opacity: 0.7 }}>
                No announcements available at the moment.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {announcements.map((a) => (
                <div
                  key={a.id}
                  className="glass"
                  style={{
                    padding: "18px 20px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                  }}
                >
                  {/* TITLE */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "6px",
                    }}
                  >
                    <Megaphone size={18} color="#22d3ee" />
                    <h3 style={{ margin: 0 }}>{a.title}</h3>
                  </div>

                  {/* MESSAGE */}
                  <p style={{ margin: "6px 0", opacity: 0.92 }}>
                    {a.message}
                  </p>

                  {/* META */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "12px",
                      fontSize: "13px",
                      opacity: 0.75,
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Calendar size={14} />
                      {a.date}
                    </span>

                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        background: "rgba(34,211,238,0.15)",
                        border: "1px solid rgba(34,211,238,0.35)",
                        color: "#e5faff",
                      }}
                    >
                      {a.target}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default StudentAnnouncements;
