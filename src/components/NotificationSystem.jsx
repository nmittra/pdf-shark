import { useState, forwardRef } from 'react';
import { Snackbar, Alert as MuiAlert } from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, severity = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, severity }]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <>
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open={true}
          autoHideDuration={6000}
          onClose={() => removeNotification(notification.id)}
        >
          <Alert 
            onClose={() => removeNotification(notification.id)} 
            severity={notification.severity}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}

export default NotificationSystem;