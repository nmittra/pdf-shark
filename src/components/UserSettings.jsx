import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Switch, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  Divider,
  Button
} from '@mui/material';

function UserSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    autoDownload: false,
    darkMode: false,
    highQuality: true
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>Settings</Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary="Email Notifications"
            secondary="Receive updates about your processed files"
          />
          <ListItemSecondaryAction>
            <Switch 
              checked={settings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Auto Download"
            secondary="Automatically download processed files"
          />
          <ListItemSecondaryAction>
            <Switch 
              checked={settings.autoDownload}
              onChange={() => handleToggle('autoDownload')}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="Dark Mode"
            secondary="Enable dark theme"
          />
          <ListItemSecondaryAction>
            <Switch 
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained">Save Changes</Button>
      </Box>
    </Paper>
  );
}

export default UserSettings;