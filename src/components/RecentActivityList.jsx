import { List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Description, Download, Delete } from '@mui/icons-material';

function RecentActivityList() {
  const activities = [
    { id: 1, filename: 'document.pdf', action: 'Converted to Word', date: '2024-01-20' },
    { id: 2, filename: 'presentation.pdf', action: 'Compressed', date: '2024-01-19' },
    { id: 3, filename: 'report.pdf', action: 'Split', date: '2024-01-18' },
  ];

  return (
    <List>
      {activities.map((activity) => (
        <ListItem key={activity.id}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText 
            primary={activity.filename}
            secondary={`${activity.action} - ${activity.date}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="download">
              <Download />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default RecentActivityList;