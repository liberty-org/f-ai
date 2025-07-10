import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ padding: "10px 20px", background: "#f0f0f0" }}>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/courses">
          <button>Courses</button>
        </Link>
      </nav>
    </header>
  );
}
