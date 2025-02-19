import { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Switch, FormControlLabel } from '@mui/material';
import PdfToolViewer from '../PdfToolViewer';

function PdfToPowerPoint() {
  const [format, setFormat] = useState('pptx');
  const [keepAnimations, setKeepAnimations] = useState(true);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Output Format</InputLabel>
          <Select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            label="Output Format"
          >
            <MenuItem value="pptx">PowerPoint (PPTX)</MenuItem>
            <MenuItem value="ppt">PowerPoint 97-2003 (PPT)</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Switch
              checked={keepAnimations}
              onChange={(e) => setKeepAnimations(e.target.checked)}
            />
          }
          label="Preserve Animations"
        />
      </Box>
      
      <PdfToolViewer 
        toolName="PDF to PowerPoint" 
        description="Convert your PDF presentations into editable PowerPoint slides"
        outputFormat={format}
        options={{ keepAnimations }}
      />
    </Box>
  );
}

export default PdfToPowerPoint;