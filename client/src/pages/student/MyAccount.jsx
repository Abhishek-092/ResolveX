import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import { Pencil } from "lucide-react";

const rowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
};

const valueStyle = {
  opacity: 0.9,
  fontSize: "15px",
};

const editInputStyle = {
  height: "42px",
  fontSize: "14px",
  borderRadius: "8px",
  width: "260px",
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

  const toggleEdit = (key) =>
    setEdit((prev) => ({ ...prev, [key]: !prev[key] }));

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
              {/* Name */}
              <div style={rowStyle}>
                <strong>Full name</strong>
                <span style={valueStyle}>Rahul Sharma</span>
              </div>

              {/* Email */}
              <div style={rowStyle}>
                <strong>Email address</strong>
                {edit.email ? (
                  <input defaultValue="rahul@example.com" style={editInputStyle} />
                ) : (
                  <span style={valueStyle}>rahul@example.com</span>
                )}
                <Pencil
                  size={16}
                  style={{ cursor: "pointer", opacity: 0.7 }}
                  onClick={() => toggleEdit("email")}
                />
              </div>

              {/* Phone */}
              <div style={rowStyle}>
                <strong>Phone number</strong>
                {edit.phone ? (
                  <input defaultValue="+91 98765 43210" style={editInputStyle} />
                ) : (
                  <span style={valueStyle}>+91 98765 43210</span>
                )}
                <Pencil
                  size={16}
                  style={{ cursor: "pointer", opacity: 0.7 }}
                  onClick={() => toggleEdit("phone")}
                />
              </div>

              {/* Emergency */}
              <div style={rowStyle}>
                <strong>Emergency contact (optional)</strong>
                {edit.emergency ? (
                  <input placeholder="+91 XXXXX XXXXX" style={editInputStyle} />
                ) : (
                  <span style={{ ...valueStyle, opacity: 0.6 }}>Not provided</span>
                )}
                <Pencil
                  size={16}
                  style={{ cursor: "pointer", opacity: 0.7 }}
                  onClick={() => toggleEdit("emergency")}
                />
              </div>

              {/* Blood Group */}
              <div style={rowStyle}>
                <strong>Blood group</strong>
                {edit.blood ? (
                  <input defaultValue="B+" style={editInputStyle} />
                ) : (
                  <span style={valueStyle}>B+</span>
                )}
                <Pencil
                  size={16}
                  style={{ cursor: "pointer", opacity: 0.7 }}
                  onClick={() => toggleEdit("blood")}
                />
              </div>
            </div>
          </div>

          {/* CAMPUS */}
          <div className="glass" style={{ padding: "32px", marginBottom: "24px" }}>
            <h3 style={{ marginBottom: "18px" }}>Campus Details</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={rowStyle}>
                <strong>Hostel / Block</strong>
                {edit.hostel ? (
                  <input defaultValue="Hostel A" style={editInputStyle} />
                ) : (
                  <span style={valueStyle}>Hostel A</span>
                )}
                <Pencil
                  size={16}
                  style={{ cursor: "pointer", opacity: 0.7 }}
                  onClick={() => toggleEdit("hostel")}
                />
              </div>

              <div style={rowStyle}>
                <strong>Room number</strong>
                {edit.room ? (
                  <input defaultValue="214" style={editInputStyle} />
                ) : (
                  <span style={valueStyle}>214</span>
                )}
                <Pencil
                  size={16}
                  style={{ cursor: "pointer", opacity: 0.7 }}
                  onClick={() => toggleEdit("room")}
                />
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
