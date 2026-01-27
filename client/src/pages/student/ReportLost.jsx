import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  height: "44px",
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
                  style={inputStyle}
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
                  style={inputStyle}
                  required
                />
              </div>

              {/* DATE & TIME */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                <div style={fieldStyle}>
                  <label className="label">Date lost</label>
                  <input type="date" style={inputStyle} required />
                </div>

                <div style={fieldStyle}>
                  <label className="label">
                    Time lost <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
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
              <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
                <button className="btn-primary" style={{ minWidth: "220px" }}>
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
