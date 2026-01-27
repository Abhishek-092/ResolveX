import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        color: "#cbd5f5",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ArrowLeft size={18} />
    </button>
  );
};

export default BackButton;
