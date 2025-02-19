import { createContext, useContext } from 'react';
import NotificationSystem from '../components/NotificationSystem';

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const showNotification = (message, severity) => {
    // Implementation will be added when we integrate with NotificationSystem
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotificationSystem />
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);