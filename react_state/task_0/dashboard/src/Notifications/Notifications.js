import React from "react";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications, styles.small)}>
            <button
              style={{
                position: "relative",
                left: "calc(100% - 30px)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img style={{ width: "10px" }} src={icon} alt="" />
            </button>
            {listNotifications?.length > 0 ? (
              <p>Here is the list of notifications</p>
            ) : (
              <p>No new notification for now</p>
            )}
            {listNotifications?.length > 0 && (
              <ul>
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value || null}
                    html={notification.html || null}
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bounceKeyframes = {
  "0%": {
    transform: "translateY('5px')",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: "2px red dotted",
    padding: "3px 10px",
    position: "absolute",
    right: "5px",
    top: "2em",
    width: "37%",
    fontSize: "1.1rem",
  },

  menuItem: {
    position: "absolute",
    right: "5px",
    fontSize: "1.2rem",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    ":hover": {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  small: {
    "@media (max-width: 900px)": {
      fontSize: "20px",
      width: "100%",
      right: "-10px",
      top: "0",
      border: "none",
      zIndex: "1",
      height: "100vh",
      backgroundColor: "white",
      ":nth-child(1n) > ul": {
        padding: "0",
      },
    },
  },
});

export default Notifications;
