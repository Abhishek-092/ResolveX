import { useState } from "react";
import {
  Search,
  Package,
  PlusCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

/* Mock data (API later) */
const items = [
  {
    id: 1,
    type: "Lost",
    name: "Black Wallet",
    description: "Leather wallet with ID cards inside.",
    location: "Hostel A · Common Room",
    date: "12 Sep 2025",
    status: "Open",
  },
  {
    id: 2,
    type: "Found",
    name: "Bluetooth Earbuds",
    description: "Found near the library entrance.",
    location: "Central Library",
    date: "11 Sep 2025",
    status: "Claim Requested",
  },
  {
    id: 3,
    type: "Found",
    name: "Water Bottle",
    description: "Blue steel bottle left in corridor.",
    location: "Hostel B · Floor 2",
    date: "08 Sep 2025",
    status: "Claim Approved",
  },
];

const statusIcon = {
  Open: Clock,
  "Claim Requested": Clock,
  "Claim Approved": CheckCircle2,
};

const LostAndFound = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.type === filter);

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div>
              <h1 style={{ marginBottom: "6px" }}>Lost & Found</h1>
              <p style={{ opacity: 0.75 }}>
                Report lost items or claim items found on campus.
              </p>
            </div>

            {/* ACTIONS */}
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn-secondary">
                <Search size={16} /> Report Lost
              </button>
              <button className="btn-primary">
                <PlusCircle size={16} /> Report Found
              </button>
            </div>
          </div>

          {/* FILTER */}
          <div
            className="glass"
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            {["All", "Lost", "Found"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background:
                    filter === f
                      ? "rgba(255,255,255,0.25)"
                      : "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* LIST */}
          {filteredItems.length === 0 ? (
            <div className="glass">
              <p style={{ opacity: 0.7 }}>
                No items available for the selected filter.
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
              {filteredItems.map((item) => {
                const Icon = statusIcon[item.status] || Package;

                return (
                  <div key={item.id} className="glass">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "16px",
                      }}
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <p style={{ margin: "4px 0", opacity: 0.85 }}>
                          {item.description}
                        </p>

                        <p style={{ fontSize: "13px", opacity: 0.7 }}>
                          {item.location}
                        </p>
                        <p style={{ fontSize: "12px", opacity: 0.6 }}>
                          {item.type} · {item.date}
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "14px",
                        }}
                      >
                        <Icon size={18} />
                        {item.status}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LostAndFound;
