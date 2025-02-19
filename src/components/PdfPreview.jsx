import { useState } from 'react';
import { Box, Paper, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function PdfPreview({ file }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </IconButton>
        
        <Box sx={{ 
          width: '100%', 
          maxWidth: 600, 
          height: 800, 
          mx: 2,
          border: '1px solid #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {file ? (
            <iframe
              src={URL.createObjectURL(file)}
              width="100%"
              height="100%"
              title="PDF Preview"
            />
          ) : (
            <Typography color="text.secondary">
              No file selected
            </Typography>
          )}
        </Box>

        <IconButton 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </IconButton>
      </Box>
      <Typography align="center" sx={{ mt: 1 }}>
        Page {currentPage} of {totalPages}
      </Typography>
    </Paper>
  );
}

export default PdfPreview;