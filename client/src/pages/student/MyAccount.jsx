import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import { Pencil } from "lucide-react";

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const valueRow = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const valueText = {
  fontSize: "15px",
  opacity: 0.9,
};

const inputStyle = {
  height: "42px",
  fontSize: "15px",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "360px",
};

const editIconStyle = {
  cursor: "pointer",
  opacity: 0.65,
};

const MyAccount = () => {
  const [edit, setEdit] = useState({
    email: false,
    phone: false,
    emergency: false,
    hostel: false,
    room: false,
    blood: false,
  });

  const toggle = (k) => setEdit((p) => ({ ...p, [k]: !p[k] }));

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

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Name (non-editable) */}
              <div style={field}>
                <label className="label">Full name</label>
                <span style={valueText}>Rahul Sharma</span>
              </div>

              {/* Email */}
              <div style={field}>
                <label className="label">Email address</label>
                <div style={valueRow}>
                  {edit.email ? (
                    <input
                      defaultValue="rahul@example.com"
                      style={inputStyle}
                    />
                  ) : (
                    <span style={valueText}>rahul@example.com</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("email")}
                  />
                </div>
                <span style={{ fontSize: "12px", opacity: 0.65 }}>
                  Changing this will affect future logins.
                </span>
              </div>

              {/* Phone */}
              <div style={field}>
                <label className="label">Phone number</label>
                <div style={valueRow}>
                  {edit.phone ? (
                    <input
                      defaultValue="+91 98765 43210"
                      style={inputStyle}
                    />
                  ) : (
                    <span style={valueText}>+91 98765 43210</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("phone")}
                  />
                </div>
              </div>

              {/* Emergency */}
              <div style={field}>
                <label className="label">Emergency contact (optional)</label>
                <div style={valueRow}>
                  {edit.emergency ? (
                    <input
                      placeholder="+91 XXXXX XXXXX"
                      style={inputStyle}
                    />
                  ) : (
                    <span style={{ ...valueText, opacity: 0.6 }}>
                      Not provided
                    </span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("emergency")}
                  />
                </div>
              </div>

              {/* Blood Group */}
              <div style={field}>
                <label className="label">Blood group</label>
                <div style={valueRow}>
                  {edit.blood ? (
                    <input defaultValue="B+" style={inputStyle} />
                  ) : (
                    <span style={valueText}>B+</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("blood")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CAMPUS */}
          <div className="glass" style={{ padding: "32px", marginBottom: "24px" }}>
            <h3 style={{ marginBottom: "18px" }}>Campus Details</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={field}>
                <label className="label">Hostel / Block</label>
                <div style={valueRow}>
                  {edit.hostel ? (
                    <input defaultValue="Hostel A" style={inputStyle} />
                  ) : (
                    <span style={valueText}>Hostel A</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("hostel")}
                  />
                </div>
              </div>

              <div style={field}>
                <label className="label">Room number</label>
                <div style={valueRow}>
                  {edit.room ? (
                    <input defaultValue="214" style={inputStyle} />
                  ) : (
                    <span style={valueText}>214</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("room")}
                  />
                </div>
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
