import React from "react";
import "./Notifications.css";
import icon from "./close-icon.png";
import { getLatestNotification } from "./utils";

const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        style={{
          position: "relative",
          left: "calc(100% - 20px)",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img style={{ width: "10px" }} src={icon} alt="" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          className="latest-notification"
          dangerouslySetInnerHTML={getLatestNotification()}
        />
      </ul>
    </div>
  );
};

export default Notifications;
