import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "15px 30px",
    background: "linear-gradient(90deg, #6a11cb, #2575fc)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#FFD700" : "#fff",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "700" : "500",
    fontSize: "16px",
    transition: "all 0.3s ease",
    position: "relative",
  });

  const hoverEffect = {
    position: "absolute",
    bottom: "-4px",
    left: "0",
    width: "100%",
    height: "2px",
    background: "#FFD700",
    borderRadius: "4px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      
      <div style={{ fontWeight: "bold", fontSize: "40px" }}>
        🚀 Code Debugger
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        {[
          { path: "/", label: "Home" },
          { path: "/story", label: "Story" },
          { path: "/playground", label: "Playground" },
          { path: "/quiz", label: "Quiz" },
          { path: "/MoodExplorer", label:"MoodExplorer"},
          { path: "/wrapup", label: "Wrap Up" },
          { path: "/answers", label: "Quiz Answers"}
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={linkStyle(link.path)}
            onMouseEnter={(e) =>
              (e.target.style.color = "#FFD700")
            }
            onMouseLeave={(e) =>
              (e.target.style.color =
                location.pathname === link.path ? "#FFD700" : "#fff")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
