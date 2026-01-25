import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ color: "#1f3a5f", fontSize: "18px" }}>
          ResolveX
        </strong>

        <div>
          <Link to="/login" style={{ marginRight: "16px" }}>
            Login
          </Link>
          <Link to="/register">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
