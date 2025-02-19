import { useState } from 'react';
import { Box, Paper, Typography, Grid, Button, Switch, FormControlLabel } from '@mui/material';
import { CompareArrows } from '@mui/icons-material';

function PdfCompare() {
  const [settings, setSettings] = useState({
    highlightChanges: true,
    showSideBySide: true,
    detectMoved: true
  });

  const [files, setFiles] = useState({
    original: null,
    modified: null
  });

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="outlined" component="label">
              Upload Original PDF
              <input type="file" hidden accept=".pdf" />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="outlined" component="label">
              Upload Modified PDF
              <input type="file" hidden accept=".pdf" />
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 3, p: 3 }}>
        <Typography variant="h6" gutterBottom>Comparison Settings</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.highlightChanges}
                  onChange={(e) => setSettings(prev => ({ ...prev, highlightChanges: e.target.checked }))}
                />
              }
              label="Highlight Changes"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.showSideBySide}
                  onChange={(e) => setSettings(prev => ({ ...prev, showSideBySide: e.target.checked }))}
                />
              }
              label="Side by Side View"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.detectMoved}
                  onChange={(e) => setSettings(prev => ({ ...prev, detectMoved: e.target.checked }))}
                />
              }
              label="Detect Moved Content"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          startIcon={<CompareArrows />}
          fullWidth
          sx={{ mt: 3 }}
        >
          Compare PDFs
        </Button>
      </Paper>
    </Box>
  );
}

export default PdfCompare;