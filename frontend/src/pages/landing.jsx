// LandingPage.jsx
import React from "react";
import "./landing.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <h2>Meetly</h2>
        </div>
        <div className="nav-links">
          <p className="nav-item" onClick={() => router("/join-as-guest")}>
            Join as Guest
          </p>
          <p className="nav-item" onClick={() => router("/auth")}>
            Register
          </p>
          <div
            className="login-btn"
            onClick={() => router("/auth")}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="hero-section">
          <h1>
            <span className="highlight">Connect</span> and collaborate
            <br />
            seamlessly with Meetly
          </h1>
          <p className="subtitle">
            Experience crystal-clear video calls and instant messaging for your
            virtual meetings, anywhere, anytime.
          </p>
          <div className="cta-button" role="button">
            <Link to="/auth">Start Meeting</Link>
          </div>
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <p>Secure Calls</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <p>HD Quality</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <p>Integrated Chat</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
