import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Grid,
  Switch,
  FormControlLabel
} from '@mui/material';
import { Save, Upload, Download } from '@mui/icons-material';

function PdfFormFiller() {
  const [formFields, setFormFields] = useState([
    { id: 1, label: 'Full Name', type: 'text', value: '' },
    { id: 2, label: 'Email', type: 'email', value: '' },
    { id: 3, label: 'Date', type: 'date', value: '' }
  ]);

  const [settings, setSettings] = useState({
    flattenForm: false,
    saveAsTemplate: false
  });

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Form Fields</Typography>
        <Grid container spacing={3}>
          {formFields.map(field => (
            <Grid item xs={12} sm={6} key={field.id}>
              <TextField
                fullWidth
                label={field.label}
                type={field.type}
                value={field.value}
                onChange={(e) => {
                  const updatedFields = formFields.map(f => 
                    f.id === field.id ? { ...f, value: e.target.value } : f
                  );
                  setFormFields(updatedFields);
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3 }}>
          <FormControlLabel
            control={
              <Switch
                checked={settings.flattenForm}
                onChange={(e) => setSettings({ ...settings, flattenForm: e.target.checked })}
              />
            }
            label="Flatten Form (make non-editable)"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.saveAsTemplate}
                onChange={(e) => setSettings({ ...settings, saveAsTemplate: e.target.checked })}
              />
            }
            label="Save as Template"
          />
        </Box>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button variant="contained" startIcon={<Save />}>
            Fill Form
          </Button>
          <Button variant="outlined" startIcon={<Upload />}>
            Import Data
          </Button>
          <Button variant="outlined" startIcon={<Download />}>
            Export Data
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default PdfFormFiller;