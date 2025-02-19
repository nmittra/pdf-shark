import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#f5f5f5',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              PDF Shark
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The simple and secure way to handle your PDF files.
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Product
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link href="#" color="text.secondary">Features</Link>
              <Link href="#" color="text.secondary">Pricing</Link>
              <Link href="#" color="text.secondary">Security</Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Company
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link href="#" color="text.secondary">About</Link>
              <Link href="#" color="text.secondary">Blog</Link>
              <Link href="#" color="text.secondary">Careers</Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link href="#" color="text.secondary">Help Center</Link>
              <Link href="#" color="text.secondary">Contact</Link>
              <Link href="#" color="text.secondary">Terms</Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} PDF Shark. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;