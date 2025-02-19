import { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
  Chip,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { Search, FilterList, Description, Clear } from '@mui/icons-material';

function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    content: true,
    filename: true,
    metadata: true,
    caseSensitive: false,
    exactMatch: false
  });

  const [results, setResults] = useState([
    { 
      filename: 'report.pdf',
      matches: 3,
      preview: '...contains the search term in page 2...'
    }
  ]);

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search in PDFs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setSearchQuery('')}>
                  <Clear />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" gutterBottom>
            <FilterList /> Search Filters
          </Typography>
          <FormGroup>
            {Object.entries(filters).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value}
                    onChange={(e) => setFilters({ ...filters, [key]: e.target.checked })}
                  />
                }
                label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              />
            ))}
          </FormGroup>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant="subtitle1" gutterBottom>
            Search Results
          </Typography>
          <List>
            {results.map((result, index) => (
              <ListItem key={index} sx={{ border: 1, borderColor: 'divider', mb: 1, borderRadius: 1 }}>
                <ListItemIcon>
                  <Description />
                </ListItemIcon>
                <ListItemText
                  primary={result.filename}
                  secondary={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {result.preview}
                      </Typography>
                      <Chip 
                        size="small" 
                        label={`${result.matches} matches`}
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AdvancedSearch;