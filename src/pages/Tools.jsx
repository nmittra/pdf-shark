import { Box, Container, Typography, Grid } from '@mui/material';
import PdfToolCard from '../components/PdfToolCard';
import { 
  PictureAsPdf, 
  Merge, 
  Compress, 
  Lock,
  FileCopy,
  Edit,
  Delete,
  Transform,
  TextFields
} from '@mui/icons-material';

const tools = [
  {
    title: 'Convert PDF',
    description: 'Convert PDFs to Word, Excel, PowerPoint and more',
    icon: <PictureAsPdf />,
    color: '#e53935'
  },
  {
    title: 'Merge PDF',
    description: 'Combine multiple PDFs into one file',
    icon: <Merge />,
    color: '#1e88e5'
  },
  {
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing quality',
    icon: <Compress />,
    color: '#43a047'
  },
  {
    title: 'Protect PDF',
    description: 'Encrypt and password-protect your PDFs',
    icon: <Lock />,
    color: '#fb8c00'
  },
  {
    title: 'Split PDF',
    description: 'Separate one PDF into multiple files',
    icon: <FileCopy />,
    color: '#8e24aa'
  },
  {
    title: 'Edit PDF',
    description: 'Add text, images, and shapes to your PDF',
    icon: <Edit />,
    color: '#3949ab'
  },
  {
    title: 'Delete Pages',
    description: 'Remove pages from your PDF file',
    icon: <Delete />,
    color: '#d81b60'
  },
  {
    title: 'Rotate PDF',
    description: 'Rotate and save your PDF pages',
    icon: <Transform />,
    color: '#00acc1'
  },
  {
    title: 'OCR PDF',
    description: 'Make your PDF text searchable',
    icon: <TextFields />,
    color: '#7cb342'
  }
];

function Tools() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center">
          All PDF Shark Tools
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 6 }}>
          Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly.
        </Typography>
        <Grid container spacing={3}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PdfToolCard {...tool} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Tools;