import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* Background Sprinkles */}
      <div className="background-sprinkles">
        {Array.from({ length: 45 }).map((_, i) => (
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

      {/* Top Right Sign In */}
      <div className="top-nav">
        <Link to="/login" className="signin-btn">
          Sign in
        </Link>
      </div>

      {/* HERO */}
      <section className="section">
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className="glass" style={{ maxWidth: "760px", width: "100%" }}>
            <h1>
              Campus issues,
              <br />
              resolved with clarity.
            </h1>

            <p style={{ marginTop: "22px", textAlign: "center" }}>
              A structured, transparent system for tracking and resolving
              campus infrastructure issues.
            </p>

            {/* Hero Meta */}
            <div className="hero-meta">
              <div>
                <span>5-Stage</span>
                <small>Resolution lifecycle</small>
              </div>
              <div>
                <span>Public</span>
                <small>Issue visibility</small>
              </div>
              <div>
                <span>Real-time</span>
                <small>Status tracking</small>
              </div>
            </div>

            <div style={{ marginTop: "48px", textAlign: "center" }}>
              <Link to="/register" className="btn-primary">
                Access ResolveX
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE GRID */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          <div className="glass">
            <h2>Transparent lifecycle</h2>
            <p>
              Issue status, ownership, and progress remain visible from
              report to closure.
            </p>
          </div>

          <div className="glass">
            <h2>Clear accountability</h2>
            <p>
              Each issue is assigned, tracked, and resolved through
              defined responsibility stages.
            </p>
          </div>

          <div className="glass">
            <h2>Operational insight</h2>
            <p>
              Management gains clarity on trends, delays, and recurring
              infrastructure problems.
            </p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section">
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className="glass" style={{ maxWidth: "760px" }}>
            <h2>Designed for institutions</h2>
            <p style={{ marginTop: "14px" }}>
              ResolveX replaces informal reporting with a structured,
              auditable, and accountable resolution workflow.
            </p>
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
