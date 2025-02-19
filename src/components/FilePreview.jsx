import { useState } from 'react';
import { 
  Box, 
  Paper, 
  IconButton, 
  Typography,
  Slider,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip
} from '@mui/material';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateLeft, 
  RotateRight,
  Fullscreen,
  ViewModule,
  ViewStream
} from '@mui/icons-material';

function FilePreview({ file }) {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [viewMode, setViewMode] = useState('single');

  const handleZoomChange = (event, newValue) => {
    setZoom(newValue);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(e, value) => value && setViewMode(value)}
          size="small"
        >
          <ToggleButton value="single">
            <Tooltip title="Single Page">
              <ViewStream />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="grid">
            <Tooltip title="Grid View">
              <ViewModule />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small" onClick={() => setZoom(prev => Math.max(prev - 10, 50))}>
            <ZoomOut />
          </IconButton>
          <Slider
            value={zoom}
            min={50}
            max={200}
            onChange={handleZoomChange}
            sx={{ width: 100 }}
          />
          <IconButton size="small" onClick={() => setZoom(prev => Math.min(prev + 10, 200))}>
            <ZoomIn />
          </IconButton>
        </Box>

        <Box>
          <IconButton onClick={() => setRotation(prev => prev - 90)}>
            <RotateLeft />
          </IconButton>
          <IconButton onClick={() => setRotation(prev => prev + 90)}>
            <RotateRight />
          </IconButton>
          <IconButton>
            <Fullscreen />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          height: 600,
          border: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto'
        }}
      >
        {file ? (
          <Box
            component="iframe"
            src={URL.createObjectURL(file)}
            sx={{
              width: '100%',
              height: '100%',
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s'
            }}
          />
        ) : (
          <Typography color="text.secondary">
            No file selected
          </Typography>
        )}
      </Box>
    </Paper>
  );
}

export default FilePreview;