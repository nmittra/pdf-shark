import { Box, Typography, Button, Container, Grid, Card, CardContent, CardActions, Stack, Paper } from '@mui/material';
import { 
  PictureAsPdf, 
  Transform, 
  Merge, 
  Security, 
  Edit, 
  CloudUpload 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const popularTools = [
    {
      title: 'Convert PDF',
      description: 'Convert PDFs to Word, Excel, PowerPoint and more',
      icon: <Transform fontSize="large" color="primary" />,
      path: '/tools/convert'
    },
    {
      title: 'Merge PDF',
      description: 'Combine multiple PDFs into a single file',
      icon: <Merge fontSize="large" color="primary" />,
      path: '/tools/merge'
    },
    {
      title: 'Protect PDF',
      description: 'Encrypt and secure your PDF files',
      icon: <Security fontSize="large" color="primary" />,
      path: '/tools/protect'
    }
  ];

  const features = [
    {
      title: 'Easy to Use',
      description: 'Simple interface for quick PDF operations',
      icon: <Edit fontSize="large" color="secondary" />
    },
    {
      title: 'Cloud Storage',
      description: 'Access your files from anywhere',
      icon: <CloudUpload fontSize="large" color="secondary" />
    },
    {
      title: 'Batch Processing',
      description: 'Process multiple files at once',
      icon: <PictureAsPdf fontSize="large" color="secondary" />
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        py: { xs: 8, md: 12 },
        borderRadius: { md: '0 0 48px 48px' }
      }}>
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography variant="h2" component="h1">
              We make PDF easy.
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 'md' }}>
              All the tools you'll need to be more productive and work smarter with documents
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                size="large" 
                color="secondary"
                onClick={() => navigate('/tools')}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ color: 'white', borderColor: 'white' }}
                onClick={() => navigate('/preview')}
              >
                Explore All Tools
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Popular Tools Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Most Popular PDF Tools
        </Typography>
        <Grid container spacing={3}>
          {popularTools.map((tool, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' }
                }}
                onClick={() => navigate(tool.path)}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{tool.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {tool.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {tool.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Why Choose PDF Shark?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' }
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Join thousands of users who trust PDF Shark for their document needs
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          color="primary"
          onClick={() => navigate('/signup')}
        >
          Try for Free
        </Button>
      </Container>
    </Box>
  );
}

export default Home;