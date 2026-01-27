import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import { Calendar, Clock } from "lucide-react";

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  height: "44px",
  paddingLeft: "40px",
};

const ReportLost = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "10px",
              }}
            >
              <BackButton />
              Report Lost Item
            </h1>

            <p style={{ opacity: 0.8, maxWidth: "620px" }}>
              Fill in the details below to report an item you have lost.
            </p>
          </div>

          {/* FORM */}
          <div className="glass" style={{ padding: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              
              {/* ITEM NAME */}
              <div style={fieldStyle}>
                <label className="label">Item name</label>
                <input
                  type="text"
                  placeholder="Wallet, ID card, earphones"
                  style={{ height: "44px" }}
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div style={fieldStyle}>
                <label className="label">Description</label>
                <textarea
                  rows="4"
                  placeholder="Color, brand, identifying marks, contents"
                  style={{ resize: "none" }}
                  required
                />
              </div>

              {/* LOCATION */}
              <div style={fieldStyle}>
                <label className="label">Last seen location</label>
                <input
                  type="text"
                  placeholder="Hostel A, Room 204, common area"
                  style={{ height: "44px" }}
                  required
                />
              </div>

              {/* DATE & TIME */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                {/* DATE */}
                <div style={{ ...fieldStyle, width: "200px", position: "relative" }}>
                  <label className="label">Date lost</label>
                  <Calendar
                    size={16}
                    style={{
                      position: "absolute",
                      top: "38px",
                      left: "12px",
                      opacity: 0.6,
                    }}
                  />
                  <input type="date" style={inputStyle} required />
                </div>

                {/* TIME */}
                <div style={{ ...fieldStyle, width: "200px", position: "relative" }}>
                  <label className="label">
                    Time lost <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <Clock
                    size={16}
                    style={{
                      position: "absolute",
                      top: "38px",
                      left: "12px",
                      opacity: 0.6,
                    }}
                  />
                  <input type="time" style={inputStyle} />
                </div>
              </div>

              {/* IMAGE */}
              <div style={fieldStyle}>
                <label className="label">Upload image (optional)</label>
                <input type="file" accept="image/*" />
                <span style={{ fontSize: "12px", opacity: 0.6 }}>
                  Supported formats: JPG, PNG
                </span>
              </div>

              {/* SUBMIT */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                <button
                  className="btn-primary"
                  style={{
                    minWidth: "240px",
                    fontSize: "16px",
                    padding: "12px 0",
                  }}
                >
                  Submit lost report
                </button>
              </div>
            </div>
          </div>

          <p style={{ marginTop: "18px", fontSize: "13px", opacity: 0.7 }}>
            False or misleading reports may lead to disciplinary action.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportLost;
