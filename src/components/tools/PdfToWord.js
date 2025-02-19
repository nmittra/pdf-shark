import { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PdfToolViewer from '../PdfToolViewer';

function PdfToWord() {
  const [format, setFormat] = useState('docx');

  return (
    <Box>
      <FormControl sx={{ mb: 3, minWidth: 200 }}>
        <InputLabel>Output Format</InputLabel>
        <Select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          label="Output Format"
        >
          <MenuItem value="docx">Word (DOCX)</MenuItem>
          <MenuItem value="doc">Word (DOC)</MenuItem>
          <MenuItem value="rtf">Rich Text (RTF)</MenuItem>
        </Select>
      </FormControl>
      
      <PdfToolViewer 
        toolName="PDF to Word" 
        description="Convert your PDF to editable Word document"
        outputFormat={format}
      />
    </Box>
  );
}

export default PdfToWord;