import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  LinearProgress, 
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button
} from '@mui/material';
import { Delete, CloudUpload } from '@mui/icons-material';

function StorageManager() {
  const [storage, setStorage] = useState({
    used: 2.5,
    total: 10,
    files: [
      { name: 'presentation.pdf', size: '1.2 GB', date: '2024-01-20' },
      { name: 'document.pdf', size: '800 MB', date: '2024-01-19' },
      { name: 'report.pdf', size: '500 MB', date: '2024-01-18' }
    ]
  });

  const usagePercentage = (storage.used / storage.total) * 100;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Storage Management</Typography>
      
      <Box sx={{ mt: 3, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">
            {storage.used}GB of {storage.total}GB used
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {usagePercentage.toFixed(1)}%
          </Typography>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={usagePercentage}
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>

      <List>
        {storage.files.map((file, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={file.name}
              secondary={`${file.size} • ${file.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" color="error">
          Clear All
        </Button>
        <Button variant="contained" startIcon={<CloudUpload />}>
          Upgrade Storage
        </Button>
      </Box>
    </Paper>
  );
}

export default StorageManager;