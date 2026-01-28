import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  height: "48px",
  fontSize: "15px",
  borderRadius: "10px",
};

const MyAccount = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
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
              My Account
            </h1>

            <p style={{ opacity: 0.8, marginLeft: "42px" }}>
              Manage your account details and campus information.
            </p>
          </div>

          {/* PROFILE */}
          <div className="glass" style={{ padding: "32px", marginBottom: "24px" }}>
            <h3 style={{ marginBottom: "18px" }}>Profile Information</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={field}>
                <label className="label">Full name</label>
                <input type="text" value="Rahul Sharma" disabled style={inputStyle} />
              </div>

              <div style={field}>
                <label className="label">Email address</label>
                <input type="email" value="rahul@example.com" style={inputStyle} />
                <span style={{ fontSize: "12px", opacity: 0.65 }}>
                  Changing this will affect future logins.
                </span>
              </div>

              <div style={field}>
                <label className="label">Phone number (optional)</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* CAMPUS */}
          <div className="glass" style={{ padding: "32px", marginBottom: "24px" }}>
            <h3 style={{ marginBottom: "18px" }}>Campus Details</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={field}>
                <label className="label">Hostel / Block</label>
                <input type="text" value="Hostel A" style={inputStyle} />
              </div>

              <div style={field}>
                <label className="label">Room number</label>
                <input type="text" value="214" style={inputStyle} />
                <span style={{ fontSize: "12px", opacity: 0.65 }}>
                  Update this if your room changes after reallocation.
                </span>
              </div>
            </div>
          </div>

          {/* SECURITY */}
          <div className="glass" style={{ padding: "32px" }}>
            <h3 style={{ marginBottom: "18px" }}>Account Security</h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong>Google Account</strong>
                <p style={{ fontSize: "13px", opacity: 0.75 }}>
                  Link your Google account for easier login.
                </p>
              </div>

              <button className="btn-secondary">Link Google</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
