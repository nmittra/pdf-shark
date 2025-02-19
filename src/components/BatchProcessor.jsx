import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  List,
  ListItem,
  ListItemText,
  IconButton,
  LinearProgress,
  Collapse,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Select,
  MenuItem
} from '@mui/material';
import { Delete, PlayArrow, Pause, Settings } from '@mui/icons-material';

function BatchProcessor() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    parallel: true,
    maxParallel: 3,
    retryFailed: true,
    outputFormat: 'original',
    preserveMetadata: true
  });

  const [files, setFiles] = useState([
    { name: 'doc1.pdf', status: 'pending', progress: 0 },
    { name: 'doc2.pdf', status: 'pending', progress: 0 },
    { name: 'doc3.pdf', status: 'pending', progress: 0 }
  ]);

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Batch Processing</Typography>
        <Box>
          <IconButton onClick={() => setShowSettings(!showSettings)}>
            <Settings />
          </IconButton>
          <Button
            variant="contained"
            startIcon={isProcessing ? <Pause /> : <PlayArrow />}
            onClick={() => setIsProcessing(!isProcessing)}
          >
            {isProcessing ? 'Pause' : 'Start Processing'}
          </Button>
        </Box>
      </Box>

      <Collapse in={showSettings}>
        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>Processing Settings</Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={settings.parallel} />}
              label="Enable Parallel Processing"
            />
            <TextField
              type="number"
              label="Max Parallel Tasks"
              value={settings.maxParallel}
              disabled={!settings.parallel}
              sx={{ mt: 2, width: 200 }}
            />
            <FormControlLabel
              control={<Checkbox checked={settings.retryFailed} />}
              label="Automatically Retry Failed Tasks"
            />
            <Select
              value={settings.outputFormat}
              label="Output Format"
              sx={{ mt: 2, width: 200 }}
            >
              <MenuItem value="original">Same as Original</MenuItem>
              <MenuItem value="pdf">PDF</MenuItem>
              <MenuItem value="docx">DOCX</MenuItem>
            </Select>
          </FormGroup>
        </Paper>
      </Collapse>

      <List>
        {files.map((file, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={file.name}
              secondary={
                <LinearProgress 
                  variant="determinate" 
                  value={file.progress}
                  sx={{ mt: 1 }}
                />
              }
            />
            <IconButton>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default BatchProcessor;