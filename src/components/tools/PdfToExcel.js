import { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import PdfToolViewer from '../PdfToolViewer';

function PdfToExcel() {
  const [format, setFormat] = useState('xlsx');
  const [detectTables, setDetectTables] = useState(true);

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
            <MenuItem value="xlsx">Excel (XLSX)</MenuItem>
            <MenuItem value="xls">Excel 97-2003 (XLS)</MenuItem>
            <MenuItem value="csv">CSV</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={detectTables}
              onChange={(e) => setDetectTables(e.target.checked)}
            />
          }
          label="Auto-detect tables"
        />
      </Box>
      
      <PdfToolViewer 
        toolName="PDF to Excel" 
        description="Convert your PDF tables into Excel spreadsheets"
        outputFormat={format}
        options={{ detectTables }}
      />
    </Box>
  );
}

export default PdfToExcel;