import { useState, useEffect } from 'react';
import { 
  Box, 
  Paper, 
  Avatar, 
  AvatarGroup, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemAvatar,
  Badge,
  Chip
} from '@mui/material';

function Collaboration() {
  const [activeUsers, setActiveUsers] = useState([
    { id: 1, name: 'John Doe', status: 'editing', page: 1 },
    { id: 2, name: 'Jane Smith', status: 'viewing', page: 3 }
  ]);

  const [activities, setActivities] = useState([
    { id: 1, user: 'John Doe', action: 'edited page 1', timestamp: new Date() },
    { id: 2, user: 'Jane Smith', action: 'added comment', timestamp: new Date() }
  ]);

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Active Collaborators</Typography>
        <AvatarGroup max={4}>
          {activeUsers.map(user => (
            <Badge
              key={user.id}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              color={user.status === 'editing' ? 'success' : 'primary'}
            >
              <Avatar>{user.name[0]}</Avatar>
            </Badge>
          ))}
        </AvatarGroup>
      </Box>

      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemAvatar>
              <Avatar>{activity.user[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={activity.user}
              secondary={activity.action}
            />
            <Chip
              size="small"
              label={new Date(activity.timestamp).toLocaleTimeString()}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Collaboration;