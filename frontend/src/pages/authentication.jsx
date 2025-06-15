import React, { useContext } from "react";
import "./authentication.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false); // NEW

  const { handleRegister, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuth = async () => {
    setLoading(true); // Start loading
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setUsername("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (err) {
      console.log(err);
      let message = err?.response?.data?.message || "Something went wrong.";
      setError(message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="auth-page">
      <button className="back-button" onClick={() => navigate("/")}>
        <span className="back-icon">←</span>
        <span>Back to Home</span>
      </button>

      <div className="auth-container">
        <div className="auth-banner">
          <div className="banner-content">
            <div className="banner-text">
              <h1>Welcome to Meetly</h1>
              <p className="banner-subtitle">Where connections come to life</p>
              <div className="banner-features">
                <div className="feature-item">
                  <span className="feature-icon">🌐</span>
                  <p>Global Connectivity</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <p>Secure Meetings</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <p>HD Quality</p>
                </div>
              </div>
            </div>
            <div className="banner-footer">
              <p>Trusted by users worldwide</p>
            </div>
          </div>
        </div>

        <div className="auth-form-section">
          <div className="auth-form-container">
            <div className="auth-header">
              <div className="auth-logo">
                <div className="logo-circle">
                  <span className="logo-icon">M</span>
                </div>
              </div>
              <h2>Meetly</h2>
              <p className="auth-subtitle">Your virtual meeting space</p>
            </div>

            <div className="auth-toggle">
              <button
                className={`toggle-btn ${formState === 0 ? "active" : ""}`}
                onClick={() => setFormState(0)}
              >
                <span className="btn-icon">👋</span>
                Sign In
              </button>
              <button
                className={`toggle-btn ${formState === 1 ? "active" : ""}`}
                onClick={() => setFormState(1)}
              >
                <span className="btn-icon">✨</span>
                Sign Up
              </button>
            </div>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              {formState === 1 && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="error-container">
                  <span className="error-icon">⚠️</span>
                  <p className="error-message">{error}</p>
                </div>
              )}

              <button type="submit" className="submit-btn" onClick={handleAuth}>
                {formState === 0 ? (
                  <>
                    <span className="btn-text">Sign In</span>
                    <span className="btn-icon">→</span>
                  </>
                ) : (
                  <>
                    <span className="btn-text">Create Account</span>
                    <span className="btn-icon">✨</span>
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p className="footer-text">
                {formState === 0
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  className="footer-link"
                  onClick={() => setFormState(formState === 0 ? 1 : 0)}
                >
                  {formState === 0 ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="snackbar">
          <span className="snackbar-icon">✅</span>
          <p>{message}</p>
        </div>
      )}

      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
          <p className="loading-text">Please wait a few seconds...</p>
        </div>
      )}
    </div>
  );
}
