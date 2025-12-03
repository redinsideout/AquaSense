import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN = {
  username: "admin",
  password: "admin123"
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN.username && password === ADMIN.password) {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/Admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.note}>Only authorized admins can log in.</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(115deg, #11998e, #38ef7d)"
  },
  card: {
    width: "400px",
    padding: "40px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#333"
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontWeight: "500"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  note: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#666"
  }
};

export default Login;
