import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#FFD700" : "#fff",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "700" : "500",
    fontSize: "18px",
    transition: "all 0.3s ease",
    display: "block",
    padding: "8px 2px",
  });

  const links = [
    { path: "/", label: "Home" },
    { path: "/story", label: "Story" },
    { path: "/playground", label: "Playground" },
    { path: "/quiz", label: "Quiz" },
    { path: "/MoodExplorer", label: "MoodExplorer" },
    { path: "/wrapup", label: "Wrap Up" },
    { path: "/answers", label: "Quiz Answers" },
  ];

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-brand">🚀 Code Debugger</div>

      {/* Hamburger (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Desktop Links */}
      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={linkStyle(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={linkStyle(link.path)}
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
