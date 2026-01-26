import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import logoPrimary from "../../assets/images/logo-primary.svg";

const Register = () => {
  return (
    <div>
      {/* Background Sprinkles */}
      <div className="background-sprinkles">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Centered Register Card */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div
            className="glass"
            style={{
              maxWidth: "460px",
              width: "100%",
              padding: "56px 48px",
            }}
          >
            {/* Logo */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <img
                src={logoPrimary}
                alt="ResolveX"
                style={{ height: "48px" }}
              />
            </div>

            {/* Heading */}
            <h2 style={{ textAlign: "center" }}>Create your ResolveX account</h2>

            <p style={{ textAlign: "center", marginTop: "8px" }}>
              Register to report, track, and follow up on campus issues.
            </p>

            {/* Form */}
            <form style={{ marginTop: "32px" }}>
              {/* Full Name */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "6px",
                    color: "#e5e7eb",
                  }}
                >
                  Full name
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <User size={18} />
                  <input
                    type="text"
                    placeholder="Your full name"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#f9fafb",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "6px",
                    color: "#e5e7eb",
                  }}
                >
                  Email address
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Mail size={18} />
                  <input
                    type="email"
                    placeholder="you@university.edu"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#f9fafb",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "6px",
                    color: "#e5e7eb",
                  }}
                >
                  Password
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Lock size={18} />
                  <input
                    type="password"
                    placeholder="Create a password"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#f9fafb",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div style={{ marginBottom: "28px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "6px",
                    color: "#e5e7eb",
                  }}
                >
                  Confirm password
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Lock size={18} />
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#f9fafb",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Register Button */}
              <button
                type="button"
                className="btn-primary"
                style={{
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Create account
              </button>
            </form>

            {/* Footer link */}
            <div
              style={{
                marginTop: "28px",
                textAlign: "center",
                fontSize: "14px",
                color: "#cbd5e1",
              }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "#5eead4",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
