import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
            fontWeight: 'bold'
          }}
        >
          PDF Shark
        </Typography>
        <Box>
          <Button component={Link} to="/tools" color="inherit">
            Tools
          </Button>
          <Button color="inherit">Pricing</Button>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;