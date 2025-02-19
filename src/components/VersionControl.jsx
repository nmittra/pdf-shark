import { 
  Box, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton,
  Chip,
  Divider 
} from '@mui/material';
import { RestoreOutlined, GetApp } from '@mui/icons-material';

function VersionControl() {
  const versions = [
    { 
      id: 1, 
      version: 'v1.3',
      date: '2024-01-20 15:30',
      author: 'John Doe',
      changes: 'Updated content on page 3'
    },
    { 
      id: 2, 
      version: 'v1.2',
      date: '2024-01-19 14:20',
      author: 'Jane Smith',
      changes: 'Fixed formatting issues'
    }
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Version History</Typography>
      
      <List>
        {versions.map((version, index) => (
          <Box key={version.id}>
            <ListItem>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1">{version.version}</Typography>
                    {index === 0 && <Chip label="Current" size="small" color="primary" />}
                  </Box>
                }
                secondary={
                  <>
                    <Typography variant="body2">{version.changes}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {version.author} • {version.date}
                    </Typography>
                  </>
                }
              />
              <Box>
                <IconButton size="small" title="Restore this version">
                  <RestoreOutlined />
                </IconButton>
                <IconButton size="small" title="Download">
                  <GetApp />
                </IconButton>
              </Box>
            </ListItem>
            {index < versions.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Paper>
  );
}

export default VersionControl;