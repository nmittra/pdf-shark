import { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Slider, Typography } from '@mui/material';
import PdfToolViewer from '../PdfToolViewer';

function PdfToImages() {
  const [format, setFormat] = useState('jpg');
  const [quality, setQuality] = useState(80);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 4, mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Image Format</InputLabel>
          <Select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            label="Image Format"
          >
            <MenuItem value="jpg">JPEG</MenuItem>
            <MenuItem value="png">PNG</MenuItem>
            <MenuItem value="tiff">TIFF</MenuItem>
          </Select>
        </FormControl>
        
        <Box sx={{ width: 200 }}>
          <Typography gutterBottom>Quality</Typography>
          <Slider
            value={quality}
            onChange={(e, newValue) => setQuality(newValue)}
            valueLabelDisplay="auto"
            min={10}
            max={100}
          />
        </Box>
      </Box>
      
      <PdfToolViewer 
        toolName="PDF to Images" 
        description="Convert PDF pages into high-quality images"
        outputFormat={format}
        options={{ quality }}
      />
    </Box>
  );
}

export default PdfToImages;