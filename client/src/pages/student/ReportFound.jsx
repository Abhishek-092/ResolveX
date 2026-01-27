import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const ReportFound = () => {
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
            Report Found Item
          </h1>

          <p style={{ opacity: 0.8, marginBottom: "24px" }}>
            Report an item you have found so the owner can claim it.
          </p>

          {/* FORM */}
          <div className="glass" style={{ padding: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                type="text"
                placeholder="Item name (e.g. Earbuds, Bottle)"
                required
              />

              <textarea
                rows="4"
                placeholder="Describe the item and where you found it"
                required
              />

              <input
                type="text"
                placeholder="Found location (e.g. Library, Study Room)"
                required
              />

              <input type="date" required />

              <input type="file" accept="image/*" />

              <button className="btn-primary" style={{ alignSelf: "flex-end" }}>
                Submit Found Report
              </button>
            </div>
          </div>

          {/* NOTE */}
          <p style={{ marginTop: "16px", fontSize: "13px", opacity: 0.7 }}>
            Found items must be reported honestly. Any misuse may result in
            penalties.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportFound;
