import React, { useState } from "react";
import Profile from "./components/Profile";
function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="userprofile">
      <button className="profile-button"
        onClick={() => setShowProfile(!showProfile)}
       >
        {showProfile ? "Close Profile" : "Open Profile"}
      </button>
      {showProfile && <Profile />}
    </div>
  );
}

export default App;
