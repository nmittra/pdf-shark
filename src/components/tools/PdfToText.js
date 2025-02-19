import { useState } from 'react';
import { Box, Paper, FormGroup, FormControlLabel, Switch, Button, TextField } from '@mui/material';
import { TextFields, Download } from '@mui/icons-material';

function PdfToText() {
  const [options, setOptions] = useState({
    preserveLayout: true,
    detectTables: true,
    extractImages: false,
    ocrEnabled: false
  });

  const [extractedText, setExtractedText] = useState('');

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <FormGroup row sx={{ gap: 4 }}>
          <FormControlLabel
            control={
              <Switch
                checked={options.preserveLayout}
                onChange={(e) => setOptions(prev => ({ ...prev, preserveLayout: e.target.checked }))}
              />
            }
            label="Preserve Layout"
          />
          <FormControlLabel
            control={
              <Switch
                checked={options.detectTables}
                onChange={(e) => setOptions(prev => ({ ...prev, detectTables: e.target.checked }))}
              />
            }
            label="Detect Tables"
          />
          <FormControlLabel
            control={
              <Switch
                checked={options.ocrEnabled}
                onChange={(e) => setOptions(prev => ({ ...prev, ocrEnabled: e.target.checked }))}
              />
            }
            label="Enable OCR"
          />
        </FormGroup>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <TextField
          multiline
          rows={12}
          fullWidth
          value={extractedText}
          placeholder="Extracted text will appear here..."
          variant="outlined"
        />
        <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            startIcon={<TextFields />}
            onClick={() => {/* Extract text logic */}}
          >
            Extract Text
          </Button>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={() => {/* Download text logic */}}
          >
            Download Text
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default PdfToText;