import React, { useState } from "react";
import useNotifications from "./useNotifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Notifications() {
  const { notifications, unread, setCompleted } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleShowNotifications = () =>
    setShowNotifications(!showNotifications);

  return (
    <div className="notification-main">
      <FontAwesomeIcon
        icon={faBell}
        onClick={() => toggleShowNotifications(true)}
      />
      {unread > 0 && (
        <div
          className="notifications-pending"
          onClick={() => toggleShowNotifications(true)}
        >
          {unread}
        </div>
      )}
      {showNotifications && (
        <div className="notification-list">
          {notifications.map(notification => (
            <div
              className="notification-card"
              key={notification.id}
              onClick={() => setCompleted(notification.id)}
            >
              <div className="notification-title">{notification.title}</div>
              {!notification.completed && (
                <div className="unread-notification"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;
