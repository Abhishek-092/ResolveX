import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const ReportLost = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "700px" }}>
          {/* HEADER */}
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <BackButton />
            Report Lost Item
          </h1>

          <p style={{ opacity: 0.8, marginBottom: "24px" }}>
            Report an item you have lost so others can help recover it.
          </p>

          {/* FORM */}
          <div className="glass" style={{ padding: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                type="text"
                placeholder="Item name (e.g. Wallet, ID Card)"
                required
              />

              <textarea
                rows="4"
                placeholder="Describe the item and any identifying details"
                required
              />

              <input
                type="text"
                placeholder="Last seen location (e.g. Hostel A, Room 204)"
                required
              />

              <input type="date" required />

              <input type="file" accept="image/*" />

              <button className="btn-primary" style={{ alignSelf: "flex-end" }}>
                Submit Lost Report
              </button>
            </div>
          </div>

          {/* NOTE */}
          <p style={{ marginTop: "16px", fontSize: "13px", opacity: 0.7 }}>
            Please ensure the information provided is accurate. False reports may
            lead to disciplinary action.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportLost;
