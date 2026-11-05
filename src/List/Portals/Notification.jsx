import React, { useState } from "react";
import { createPortal } from "react-dom";

const NotificationContainer = ({ notifications, removeNotification }) => {
  return createPortal(
    <div style={styles.container}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          style={{
            ...styles.notification,
            background:
              notification.type === "success"
                ? "green"
                : notification.type === "error"
                ? "red"
                : "blue",
          }}
        >
          <span>{notification.message}</span>
        </div>
      ))}
    </div>,
    document.body
  );
};

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, type = "info") => {
    const id = Date.now();

    const notification = {
      id,
      message,
      type,
    };

    setNotifications((prev) => [...prev, notification]);

    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div>
      <h2>Notification System</h2>

      <button
        onClick={() => showNotification("Data saved successfully", "success")}
      >
        Success
      </button>

      <button onClick={() => showNotification("Something went wrong", "error")}>
        Error
      </button>

      <button onClick={() => showNotification("New notification", "info")}>
        Info
      </button>

      <NotificationContainer
        notifications={notifications}
        removeNotification={removeNotification}
      />
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    // zIndex: 9999,
  },

  notification: {
    width: "280px",
    padding: "12px",
    color: "white",
    borderRadius: "6px",
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
};
