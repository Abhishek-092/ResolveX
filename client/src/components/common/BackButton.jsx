import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer",

        /* Typography */
        fontSize: "1.4em",
        fontWeight: 400,
        lineHeight: "1",
        letterSpacing: "-0.02em",

        color: "inherit",
        opacity: 0.85,

        /* Subtle interaction */
        transition: "opacity 0.15s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
    >
      ‹
    </button>
  );
};

export default BackButton;
