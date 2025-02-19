import { Card, CardContent, Typography, Box } from '@mui/material';

function PdfToolCard({ title, description, icon, color }) {
  return (
    <Card 
      sx={{ 
        height: '100%',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box 
            sx={{ 
              backgroundColor: `${color}15`,
              borderRadius: '8px',
              p: 1,
              mr: 2,
              color: color
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PdfToolCard;