import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
      }}
    >
      <ArrowLeft size={18} style={{ verticalAlign: "middle" }} />
    </button>
  );
};

export default BackButton;
