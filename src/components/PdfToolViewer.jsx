import { Box, Container, Paper, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import { processFile } from '../services/fileProcessing';
import ProcessingStatus from './ProcessingStatus';

function PdfToolViewer({ toolName, description }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile?.type === 'application/pdf') {
      setFile(uploadedFile);
      setError(null);
    } else {
      setError('Please upload a valid PDF file');
    }
  };

  const handleProcess = async () => {
    if (!file) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 500);

      await processFile(file, toolName);
      
      clearInterval(progressInterval);
      setProgress(100);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <ProcessingStatus 
        loading={loading}
        error={error}
        progress={progress}
      />
      <Paper 
        sx={{ 
          mt: 4, 
          p: 4, 
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom>
          {toolName}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {description}
        </Typography>
        <Box
          sx={{
            border: '2px dashed #1a73e8',
            borderRadius: 2,
            p: 6,
            width: '100%',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(26, 115, 232, 0.04)'
            }
          }}
        >
          <input
            type="file"
            accept=".pdf"
            style={{ display: 'none' }}
            id="pdf-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="pdf-upload">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Drop your PDF here
              </Typography>
              <Typography variant="body2" color="text.secondary">
                or click to browse
              </Typography>
            </Box>
          </label>
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 4 }}
          onClick={handleProcess}
          disabled={!file || loading}
        >
          Process PDF
        </Button>
      </Paper>
    </Container>
  );
}

export default PdfToolViewer;