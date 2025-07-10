import React, { useState } from "react";
import { PasswordStrength } from "../components/PasswordStrength";

// Login Component
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please fill in all fields.");
    } else if (!email.includes("@")) {
      setMessage("Invalid email format.");
    } else {
      setMessage("Login successful!");
      // You can add API call or redirection here
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login to LMS</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "10px", display: "block" }}
        />
        <PasswordStrength password={password} setPassword={setPassword} />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
