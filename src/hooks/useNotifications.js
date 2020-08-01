import { useEffect, useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(notifications => setNotifications(notifications.slice(0, 10)));
  }, []);

  const setCompleted = id => {
    setNotifications(
      notifications.map(notification => {
        if (notification.id === id) {
          notification.completed = true;
        }
        return notification;
      })
    );
  };

  return {
    notifications,
    unread: notifications.filter(notification => !notification.completed)
      .length,
    setCompleted
  };
}

export default useNotifications;
