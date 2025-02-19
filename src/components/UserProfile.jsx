import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Avatar, 
  Typography, 
  TextField, 
  Button, 
  Grid,
  IconButton 
} from '@mui/material';
import { Edit, Save, Cancel } from '@mui/icons-material';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Tech Corp',
    phone: '+1 234 567 8900'
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar 
          sx={{ width: 100, height: 100, mr: 3 }}
          src="/path-to-avatar.jpg"
        />
        <Box>
          <Typography variant="h5">{profile.name}</Typography>
          <Typography color="text.secondary">{profile.email}</Typography>
        </Box>
        <IconButton 
          sx={{ ml: 'auto' }}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? <Cancel /> : <Edit />}
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        {Object.entries(profile).map(([key, value]) => (
          <Grid item xs={12} sm={6} key={key}>
            <TextField
              fullWidth
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={isEditing ? editedProfile[key] : value}
              onChange={(e) => setEditedProfile({
                ...editedProfile,
                [key]: e.target.value
              })}
              disabled={!isEditing}
            />
          </Grid>
        ))}
      </Grid>

      {isEditing && (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            startIcon={<Save />}
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Box>
      )}
    </Paper>
  );
}

export default UserProfile;