import React, { useState } from "react";

export function PasswordStrength({ password, setPassword }) {
  const [strength, setStrength] = useState("");

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          const val = e.target.value;
          setPassword(val);
          // strength calculation will be handled on input change
          if (val.length === 0) {
            setStrength("");
          } else if (val.length < 6) {
            setStrength("Weak password");
          } else if (/\d/.test(val)) {
            setStrength("Strong password");
          } else {
            setStrength("Weak password");
          }
        }}
        style={{ marginBottom: "10px", display: "block" }}
      />
      {strength && <p>{strength}</p>}
    </div>
  );
}
