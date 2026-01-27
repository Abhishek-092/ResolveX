import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const ReportLost = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "40px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <BackButton />
              Report Lost Item
            </h1>

            <p style={{ opacity: 0.8, maxWidth: "640px" }}>
              Use this form to report an item you have lost. Clear and accurate
              details improve the chances of recovery.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="glass" style={{ padding: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "42px" }}>
              
              {/* SECTION 1 */}
              <div>
                <h3 style={{ marginBottom: "20px" }}>Item Details</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div>
                    <label className="label">Item Name</label>
                    <input
                      type="text"
                      placeholder="Wallet, ID card, Earphones"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Description</label>
                    <textarea
                      rows="4"
                      placeholder="Color, brand, identifying features, contents"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div>
                <h3 style={{ marginBottom: "20px" }}>Last Known Location</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div>
                    <label className="label">Location</label>
                    <input
                      type="text"
                      placeholder="Hostel A · Room 204 · Common Area"
                      required
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <label className="label">Date Lost</label>
                      <input type="date" required />
                    </div>

                    <div>
                      <label className="label">
                        Time Lost <span style={{ opacity: 0.6 }}>(optional)</span>
                      </label>
                      <input type="time" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 */}
              <div>
                <h3 style={{ marginBottom: "20px" }}>Supporting Evidence</h3>

                <div>
                  <label className="label">
                    Upload Image <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input type="file" accept="image/*" />
                </div>
              </div>

              {/* ACTION */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <button className="btn-primary">
                  Submit Lost Report
                </button>
              </div>
            </div>
          </div>

          <p style={{ marginTop: "18px", fontSize: "13px", opacity: 0.7 }}>
            Submitting false or misleading information may lead to disciplinary
            action.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportLost;
