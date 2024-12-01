import React, { useState } from "react";
import UserLogin from "./components/UserLogin";


function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app-container">
      <button className="toggle-button" onClick={() => 
        setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Open Form"}
      </button>
      {showForm && <UserLogin />}
    </div>
  );
}

export default App;
