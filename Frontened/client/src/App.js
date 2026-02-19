import React, { useState } from "react";

function App() {
  const [output, setOutput] = useState("");

  const handleClick = async (route) => {
    const res = await fetch(`http://localhost:5000/${route}`);
    const data = await res.text();
    setOutput(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Work With OS</h2>

      <button onClick={() => handleClick("platform")}>Platform</button>
      <button onClick={() => handleClick("cpu")}>CPU</button>
      <button onClick={() => handleClick("freememory")}>Free Memory</button>
      <button onClick={() => handleClick("totalmemory")}>Total Memory</button>

      <h3 style={{ marginTop: "30px" }}>{output}</h3>
    </div>
  );
}

export default App;