import { Box, Typography, LinearProgress, Paper, IconButton } from '@mui/material';
import { Close, CheckCircle, Error } from '@mui/icons-material';

function UploadProgress({ files }) {
  return (
    <Paper sx={{ p: 2, maxWidth: 400 }}>
      <Typography variant="subtitle1" gutterBottom>
        Uploading Files
      </Typography>
      
      {files.map((file, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" noWrap sx={{ maxWidth: '70%' }}>
              {file.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {file.status === 'completed' && <CheckCircle color="success" sx={{ mr: 1 }} />}
              {file.status === 'error' && <Error color="error" sx={{ mr: 1 }} />}
              <IconButton size="small">
                <Close />
              </IconButton>
            </Box>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={file.progress} 
            sx={{ height: 4, borderRadius: 2 }}
          />
          <Typography variant="caption" color="text.secondary">
            {file.progress}% • {file.remainingTime}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

export default UploadProgress;