import React, { useState } from "react";

export function CourseToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: "10px 0" }}>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Description" : "Show Description"}
      </button>
      {isVisible && (
        <p style={{ marginTop: "10px" }}>
          This course covers React fundamentals including components, JSX, and
          props.
        </p>
      )}
    </div>
  );
}
