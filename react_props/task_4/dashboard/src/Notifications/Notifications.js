import React from "react";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';

function Notifications ({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
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
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              className="latest-notification"
              type="urgent"
              html={{__html : getLatestNotification()}}
            />
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}

export default Notifications;
