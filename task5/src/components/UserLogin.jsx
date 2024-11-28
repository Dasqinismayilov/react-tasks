import React, { useState } from "react";
import React from "react";
function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.endsWith(".ru")) {
      console.warn("Yalnız .ru domenlərinə icazə verilir.");
      setEmailError("Yalnız .ru domenlərinə icazə verilir.");
    } else {
      setEmailError("");
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      alert("Login Successful!");
    } else {
      alert("Zəhmət olmasa, düzgün məlumat daxil edin.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "20px auto",
        padding: "20px",
        maxWidth: "400px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>User Login</h2>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{
            width: "100%",
            padding: "8px",
            border: emailError ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
          }}
          placeholder="example@domain.ru"
        />
        {emailError && (
          <span style={{ color: "red", fontSize: "12px" }}>{emailError}</span>
        )}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            width: "100%",
            padding: "8px",
            border: passwordError ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
          }}
          placeholder="Minimum 8 characters"
        />
        {passwordError && (
          <span style={{ color: "red", fontSize: "12px" }}>{passwordError}</span>
        )}
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
}

export default UserLogin;
