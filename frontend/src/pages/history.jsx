import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./history.css";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch (error) {
        // Handle error
      }
    };
    fetchHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="history-page">
      <nav className="history-nav">
        <button className="back-button" onClick={() => routeTo("/home")}>
          <span className="back-icon">←</span>
          <span>Back to Home</span>
        </button>
        <h1 className="page-title"></h1>
      </nav>

      <div className="history-container">
        {meetings.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h2>No Meetings Yet</h2>
            <p>Your meeting history will appear here</p>
          </div>
        ) : (
          <div className="meetings-grid">
            {meetings.map((meeting, index) => (
              <div
                key={index}
                className="meeting-card"
                onClick={() => routeTo(`/${meeting.meetingCode}`)}
              >
                <div className="meeting-icon">
                  <span>📅</span>
                </div>
                <div className="meeting-details">
                  <div className="meeting-code">
                    <label>Meeting Code</label>
                    <span>{meeting.meetingCode}</span>
                  </div>
                  <div className="meeting-date">
                    <label>Date</label>
                    <span>{formatDate(meeting.date)}</span>
                  </div>
                </div>
                <div className="card-action">
                  <button className="join-again-btn">
                    Join Again
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
