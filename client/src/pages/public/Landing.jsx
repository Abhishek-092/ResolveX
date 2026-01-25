import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";

const Landing = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>LANDING PAGE IS RENDERING</h1>

      <Navbar />

      {/* Hero */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Campus issues. Clearly reported. Transparently resolved.</h1>

          <p style={{ maxWidth: "700px", margin: "24px auto" }}>
            ResolveX is a centralized platform for reporting, tracking, and
            resolving campus infrastructure issues with accountability and
            visibility.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
            <span style={{ marginLeft: "12px" }} />
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
          </div>

          <p style={{ marginTop: "24px", fontSize: "14px" }}>
            Designed for universities and institutional campuses.
          </p>
        </div>
      </section>

      {/* Why ResolveX */}
      <section className="section section-light">
        <div className="container">
          <h2>Why ResolveX Exists</h2>

          <p>
            Campus infrastructure issues often go unresolved due to fragmented
            reporting, lack of ownership, and limited visibility. ResolveX
            replaces informal complaint channels with a structured, transparent
            system where every issue is tracked from report to closure.
          </p>

          <ul>
            <li>No clear status updates after reporting</li>
            <li>Duplicate complaints without coordination</li>
            <li>Delayed resolutions with no accountability</li>
            <li>No data to identify recurring infrastructure issues</li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            A Structured Resolution Process
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            <div>
              <h3>Report</h3>
              <p>Students submit issues with clear details.</p>
            </div>

            <div>
              <h3>Assign</h3>
              <p>Management assigns responsibility.</p>
            </div>

            <div>
              <h3>In Progress</h3>
              <p>Status updates and remarks are added.</p>
            </div>

            <div>
              <h3>Resolve & Close</h3>
              <p>Issues are resolved and archived.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#ffffff" }}>
            Start Resolving Issues the Right Way
          </h2>

          <p style={{ color: "#e5e7eb" }}>
            Access ResolveX to report issues or manage campus infrastructure.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
            <span style={{ marginLeft: "12px" }} />
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </section>

      <footer>© ResolveX</footer>
    </div>
  );
};

export default Landing;
