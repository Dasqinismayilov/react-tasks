
import React from "react";
import UserLogin from "./components/UserLogin";
function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Form" : "Open Form"}
      </button>
      {showForm && <UserLogin />}
    </div>
  );
}

export default App;




