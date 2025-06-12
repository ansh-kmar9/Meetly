import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo">Meetly</h2>
        </div>
        <div className="nav-right">
          <button
            className="nav-button history-button"
            onClick={() => navigate("/history")}
          >
            <span className="icon">📋</span>
            History
          </button>
          <button
            className="nav-button logout-button"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            <span className="icon">👋</span>
            Logout
          </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="left-panel">
          <div className="content-wrapper">
            <h1 className="main-title">
              Connect Instantly with
              <span className="highlight"> High-Quality</span> Video Calls
            </h1>
            <p className="subtitle">
              Enjoy smooth communication with high-definition video, clear
              audio, and effortless screen sharing.
            </p>

            <div className="meeting-join">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter meeting code"
                  value={meetingCode}
                  onChange={(e) => setMeetingCode(e.target.value)}
                  className="meeting-input"
                />
                <button className="join-button" onClick={handleJoinVideoCall}>
                  Join Meeting
                </button>
              </div>
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
        </div>

        <div className="right-panel">
          <div className="illustration">
            <div className="meeting-illustration">
              {/* You can add an SVG or image here */}
              <div className="abstract-shape"></div>
              <div className="abstract-shape-2"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default withAuth(HomeComponent);
