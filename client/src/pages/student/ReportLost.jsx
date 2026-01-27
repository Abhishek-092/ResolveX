import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const ReportLost = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* HEADER */}
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "6px",
            }}
          >
            <BackButton />
            Report Lost Item
          </h1>

          <p style={{ opacity: 0.8, marginBottom: "28px" }}>
            Provide accurate details to help others identify and recover your
            lost item.
          </p>

          {/* FORM CARD */}
          <div className="glass" style={{ padding: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              
              {/* ITEM NAME */}
              <div>
                <label className="label">Item Name</label>
                <input
                  type="text"
                  placeholder="e.g. Wallet, ID Card, Earphones"
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="label">Description</label>
                <textarea
                  rows="4"
                  placeholder="Color, brand, identifying marks, contents, etc."
                  required
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="label">Last Seen Location</label>
                <input
                  type="text"
                  placeholder="e.g. Hostel A, Room 204, Common Area"
                  required
                />
              </div>

              {/* DATE */}
              <div>
                <label className="label">Date Lost</label>
                <input type="date" required />
              </div>

              {/* IMAGE */}
              <div>
                <label className="label">Upload Image (optional)</label>
                <input type="file" accept="image/*" />
              </div>

              {/* ACTION */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                <button className="btn-primary">
                  Submit Lost Report
                </button>
              </div>
            </div>
          </div>

          {/* NOTE */}
          <p style={{ marginTop: "16px", fontSize: "13px", opacity: 0.7 }}>
            Submitting false or misleading information may result in
            disciplinary action.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportLost;
