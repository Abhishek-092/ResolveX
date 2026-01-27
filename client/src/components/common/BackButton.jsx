import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Go back"
      style={{
        /* Reset button */
        background: "transparent",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer",

        /* Alignment */
        display: "inline-flex",
        alignItems: "center",

        /* Visual balance */
        color: "rgba(255,255,255,0.75)",
        lineHeight: "1",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
      }
    >
      <ArrowLeft size={18} strokeWidth={2} />
    </button>
  );
};

export default BackButton;
