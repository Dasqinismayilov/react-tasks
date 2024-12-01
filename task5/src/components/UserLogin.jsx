import React, { useState } from "react";
import "./Login.css";
function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

 //////
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.endsWith(".ru")) {
      console.warn("Yalnız .ru domenləri.");
      setEmailError("Yalnız .ru domenləri.");
    } else {
      setEmailError("");
    }
  };

  /////
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      console.warn("Ən azı 8 simvol.");
      setPasswordError("Ən azı 8 simvol.");
    } else {
      setPasswordError("");
    }
  };
/////
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      alert("Login Successful!");
    } else {
      alert("Zəhmət olmasa, düzgün məlumat daxil edin.");
    }
  };


/////
  return (
    <form onSubmit={handleSubmit} className="user-login-form">
      <h2>User Login</h2>
      <div className="form-group">
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? "error" : ""}
          placeholder="example@domain.ru"
        />
        {emailError && <span className="error-text">{emailError}</span>}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordError ? "error" : ""}
          placeholder="Minimum 8 characters"
        />
        {passwordError && <span className="error-text">{passwordError}</span>}
      </div>

      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
}

export default UserLogin;
