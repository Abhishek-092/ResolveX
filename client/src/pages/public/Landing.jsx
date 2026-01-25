import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* HERO */}
      <section className="section bg-blue">
        <div className="container">
          <div className="clay">
            <h1>
              Campus issues,
              <br />
              resolved with clarity.
            </h1>

            <p style={{ maxWidth: "520px", marginTop: "16px" }}>
              ResolveX is an institution-grade platform for tracking and resolving
              campus infrastructure issues — transparently and accountably.
            </p>

            <div style={{ marginTop: "32px" }}>
              <Link to="/register" className="btn-primary">
                Enter ResolveX
              </Link>
              <Link to="/login" className="btn-secondary">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-pink">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          <div className="clay">
            <h2>Transparent Lifecycle</h2>
            <p>
              Every issue progresses through a clearly defined resolution flow
              with timestamps and status visibility.
            </p>
          </div>

          <div className="clay">
            <h2>Clear Accountability</h2>
            <p>
              Ownership, assignment, and responsibility are explicitly tracked —
              no ambiguity.
            </p>
          </div>

          <div className="clay">
            <h2>Actionable Oversight</h2>
            <p>
              Management gains insight into patterns, delays, and recurring
              infrastructure problems.
            </p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section bg-green">
        <div className="container">
          <div className="clay">
            <h2>Not a complaint box.</h2>
            <p style={{ maxWidth: "560px", marginTop: "12px" }}>
              ResolveX replaces informal reporting with a structured,
              auditable, and accountable system designed for real campuses.
            </p>

            <div style={{ marginTop: "28px" }}>
              <Link to="/register" className="btn-primary">
                Access the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} ResolveX · Institutional Issue Resolution System
      </footer>
    </div>
  );
};

export default Landing;
