import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Slider, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Button,
  Grid
} from '@mui/material';
import { WaterDrop, TextFormat, Image } from '@mui/icons-material';

function PdfWatermark() {
  const [watermark, setWatermark] = useState({
    type: 'text',
    text: 'CONFIDENTIAL',
    fontSize: 48,
    opacity: 30,
    rotation: 45,
    position: 'center',
    color: '#000000'
  });

  return (
    <Box>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Add Watermark</Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Watermark Type</InputLabel>
              <Select
                value={watermark.type}
                onChange={(e) => setWatermark({ ...watermark, type: e.target.value })}
              >
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="image">Image</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {watermark.type === 'text' && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Watermark Text"
                value={watermark.text}
                onChange={(e) => setWatermark({ ...watermark, text: e.target.value })}
              />
            </Grid>
          )}

          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Opacity</Typography>
            <Slider
              value={watermark.opacity}
              onChange={(e, value) => setWatermark({ ...watermark, opacity: value })}
              min={0}
              max={100}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Rotation</Typography>
            <Slider
              value={watermark.rotation}
              onChange={(e, value) => setWatermark({ ...watermark, rotation: value })}
              min={-180}
              max={180}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Position</InputLabel>
              <Select
                value={watermark.position}
                onChange={(e) => setWatermark({ ...watermark, position: e.target.value })}
              >
                <MenuItem value="center">Center</MenuItem>
                <MenuItem value="topLeft">Top Left</MenuItem>
                <MenuItem value="topRight">Top Right</MenuItem>
                <MenuItem value="bottomLeft">Bottom Left</MenuItem>
                <MenuItem value="bottomRight">Bottom Right</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="color"
              label="Color"
              value={watermark.color}
              onChange={(e) => setWatermark({ ...watermark, color: e.target.value })}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<WaterDrop />}
            onClick={() => {/* Apply watermark logic */}}
          >
            Apply Watermark
          </Button>
          <Button
            variant="outlined"
            startIcon={watermark.type === 'text' ? <TextFormat /> : <Image />}
          >
            Preview
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default PdfWatermark;