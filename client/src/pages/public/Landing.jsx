import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <h1 style={{ maxWidth: "640px" }}>
            Campus infrastructure,
            <br />
            tracked to resolution.
          </h1>

          <p style={{ maxWidth: "560px", marginTop: "18px" }}>
            ResolveX is a structured issue resolution system designed for academic
            institutions. Every issue is recorded, monitored, and resolved with
            accountability.
          </p>

          <div style={{ marginTop: "36px" }}>
            <Link to="/register" className="btn-primary">
              Access Platform
            </Link>
            <Link to="/login" className="btn-secondary">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE BLOCKS */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          <div className="card">
            <h2>End-to-End Visibility</h2>
            <p>
              Issue status, ownership, and timelines are visible at every stage
              of the resolution lifecycle.
            </p>
          </div>

          <div className="card">
            <h2>Defined Accountability</h2>
            <p>
              Issues move through a controlled workflow with clear assignment and
              responsibility.
            </p>
          </div>

          <div className="card">
            <h2>Operational Oversight</h2>
            <p>
              Management gains insight into trends, delays, and recurring
              infrastructure concerns.
            </p>
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="section accent-strip">
        <div className="container">
          <h2 style={{ color: "#ffffff", maxWidth: "600px" }}>
            Designed for accountability, not complaints
          </h2>

          <p style={{ color: "#c7d2fe", maxWidth: "560px", marginTop: "14px" }}>
            ResolveX replaces informal reporting with a transparent,
            institution-grade resolution process.
          </p>

          <div style={{ marginTop: "28px" }}>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} ResolveX · Campus Issue Resolution Platform
      </footer>
    </div>
  );
};

export default Landing;
