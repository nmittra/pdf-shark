import { useState } from 'react';
import { 
  Box, 
  Paper, 
  TextField, 
  Button, 
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip
} from '@mui/material';
import { ContentCopy, Delete, Share } from '@mui/icons-material';

function FileSharing() {
  const [shareLink, setShareLink] = useState('');
  const [sharedUsers, setSharedUsers] = useState([
    { email: 'user1@example.com', access: 'view' },
    { email: 'user2@example.com', access: 'edit' }
  ]);

  const generateShareLink = () => {
    const link = `https://pdfshark.com/share/${Math.random().toString(36).slice(2)}`;
    setShareLink(link);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Share Document</Typography>
      
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Email address"
          placeholder="Enter email to share with"
          sx={{ mb: 2 }}
        />
        <Button variant="contained" startIcon={<Share />}>
          Share
        </Button>
      </Box>

      <Typography variant="subtitle1" gutterBottom>Shared with</Typography>
      <List>
        {sharedUsers.map((user, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={user.email}
              secondary={
                <Chip 
                  size="small" 
                  label={user.access} 
                  color={user.access === 'edit' ? 'primary' : 'default'}
                />
              }
            />
            <ListItemSecondaryAction>
              <IconButton>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" gutterBottom>Share via Link</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            value={shareLink}
            placeholder="Generate a share link"
            InputProps={{ readOnly: true }}
          />
          {shareLink ? (
            <IconButton onClick={() => navigator.clipboard.writeText(shareLink)}>
              <ContentCopy />
            </IconButton>
          ) : (
            <Button variant="outlined" onClick={generateShareLink}>
              Generate Link
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
}

export default FileSharing;