import { Box, CircularProgress, Alert, Typography } from '@mui/material';

function ProcessingStatus({ loading, error, progress }) {
  if (!loading && !error) return null;

  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      {loading && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <CircularProgress variant="determinate" value={progress} />
          <Typography variant="body2" color="text.secondary">
            Processing... {progress}%
          </Typography>
        </Box>
      )}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}

export default ProcessingStatus;