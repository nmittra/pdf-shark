import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  FormGroup, 
  FormControlLabel, 
  Switch,
  TextField,
  Chip
} from '@mui/material';
import { Security, Search, Delete } from '@mui/icons-material';

function PdfRedaction() {
  const [patterns, setPatterns] = useState([
    'credit card',
    'social security',
    'phone number'
  ]);
  const [settings, setSettings] = useState({
    autoDetect: true,
    markOnly: false,
    searchText: '',
    caseSensitive: false
  });

  const addPattern = (pattern) => {
    if (pattern && !patterns.includes(pattern)) {
      setPatterns([...patterns, pattern]);
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Redaction Settings</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={settings.autoDetect} />}
            label="Auto-detect sensitive information"
          />
          <FormControlLabel
            control={<Switch checked={settings.markOnly} />}
            label="Mark for review (don't apply redaction)"
          />
        </FormGroup>

        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Search Text"
            value={settings.searchText}
            onChange={(e) => setSettings({ ...settings, searchText: e.target.value })}
            onKeyPress={(e) => e.key === 'Enter' && addPattern(settings.searchText)}
          />
        </Box>

        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {patterns.map((pattern, index) => (
            <Chip
              key={index}
              label={pattern}
              onDelete={() => setPatterns(patterns.filter((_, i) => i !== index))}
            />
          ))}
        </Box>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<Search />}
            color="primary"
          >
            Find Sensitive Data
          </Button>
          <Button
            variant="contained"
            startIcon={<Security />}
            color="error"
          >
            Apply Redaction
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default PdfRedaction;