import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardActions,
  Button 
} from '@mui/material';

function Preview() {
  const features = [
    {
      title: 'PDF Tools',
      items: [
        { name: 'PDF to Word', path: '/tools/word' },
        { name: 'PDF to Excel', path: '/tools/excel' },
        { name: 'PDF to PowerPoint', path: '/tools/powerpoint' },
        { name: 'PDF to Images', path: '/tools/images' },
        { name: 'PDF OCR', path: '/tools/ocr' },
        { name: 'PDF Redaction', path: '/tools/redact' },
        { name: 'PDF Form Filling', path: '/tools/forms' },
        { name: 'PDF Encryption', path: '/tools/encrypt' },
        { name: 'PDF Watermark', path: '/tools/watermark' }
      ]
    },
    {
      title: 'File Management',
      items: [
        { name: 'File Organization', path: '/files/organize' },
        { name: 'Batch Processing', path: '/files/batch' },
        { name: 'File Sharing', path: '/files/share' },
        { name: 'Version Control', path: '/files/versions' },
        { name: 'Metadata Management', path: '/files/metadata' }
      ]
    },
    {
      title: 'User Features',
      items: [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Advanced Search', path: '/search' },
        { name: 'Activity Tracking', path: '/activity' },
        { name: 'Collaboration', path: '/collaborate' },
        { name: 'User Settings', path: '/settings' }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        PDF Shark Features
      </Typography>
      
      <Grid container spacing={4}>
        {features.map((category, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              {category.title}
            </Typography>
            <Grid container spacing={2}>
              {category.items.map((item, itemIndex) => (
                <Grid item xs={12} sm={6} md={4} key={itemIndex}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">
                        {item.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Try Now
                      </Button>
                      <Button size="small">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Preview;