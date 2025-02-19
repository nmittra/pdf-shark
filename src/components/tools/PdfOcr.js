import { useState } from 'react';
import { 
  Box, 
  Paper, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormGroup, 
  FormControlLabel, 
  Switch,
  Button,
  Grid,
  Typography
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';

function PdfOcr() {
  const [settings, setSettings] = useState({
    language: 'eng',
    mode: 'accurate',
    autoRotate: true,
    enhanceScans: true,
    detectColumns: true
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>OCR Settings</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={settings.language}
                  label="Language"
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                >
                  <MenuItem value="eng">English</MenuItem>
                  <MenuItem value="fra">French</MenuItem>
                  <MenuItem value="deu">German</MenuItem>
                  <MenuItem value="spa">Spanish</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Recognition Mode</InputLabel>
                <Select
                  value={settings.mode}
                  label="Recognition Mode"
                  onChange={(e) => setSettings(prev => ({ ...prev, mode: e.target.value }))}
                >
                  <MenuItem value="fast">Fast</MenuItem>
                  <MenuItem value="accurate">Accurate</MenuItem>
                  <MenuItem value="best">Best Quality</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <FormGroup sx={{ mt: 3 }}>
            <FormControlLabel
              control={<Switch checked={settings.autoRotate} />}
              label="Auto-rotate Pages"
            />
            <FormControlLabel
              control={<Switch checked={settings.enhanceScans} />}
              label="Enhance Scanned Documents"
            />
            <FormControlLabel
              control={<Switch checked={settings.detectColumns} />}
              label="Detect Text Columns"
            />
          </FormGroup>

          <Button
            variant="contained"
            startIcon={<DocumentScanner />}
            fullWidth
            sx={{ mt: 3 }}
          >
            Start OCR Process
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PdfOcr;