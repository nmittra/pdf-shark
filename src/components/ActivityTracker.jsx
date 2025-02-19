import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Edit,
  Delete,
  FileCopy,
  Share,
  MoreVert,
  Download
} from '@mui/icons-material';

function ActivityTracker() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activities] = useState([
    {
      id: 1,
      type: 'edit',
      file: 'report.pdf',
      timestamp: new Date(),
      details: 'Modified content on page 3'
    },
    {
      id: 2,
      type: 'share',
      file: 'contract.pdf',
      timestamp: new Date(Date.now() - 3600000),
      details: 'Shared with john@example.com'
    }
  ]);

  const getActivityIcon = (type) => {
    const icons = {
      edit: <Edit />,
      delete: <Delete />,
      copy: <FileCopy />,
      share: <Share />,
      download: <Download />
    };
    return icons[type] || <Edit />;
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Recent Activity</Typography>
      <List>
        {activities.map((activity) => (
          <Box key={activity.id}>
            <ListItem>
              <ListItemIcon>
                {getActivityIcon(activity.type)}
              </ListItemIcon>
              <ListItemText
                primary={activity.file}
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="caption">
                      {activity.timestamp.toLocaleString()}
                    </Typography>
                    <Chip
                      label={activity.type}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                }
              />
              <IconButton
                size="small"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <MoreVert />
              </IconButton>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>View Details</MenuItem>
        <MenuItem>Export Log</MenuItem>
      </Menu>
    </Paper>
  );
}

export default ActivityTracker;