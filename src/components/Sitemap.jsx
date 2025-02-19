import { Box, Container, Typography, List, ListItem, ListItemText, Divider, Chip } from '@mui/material';

function Sitemap() {
  const structure = [
    {
      path: '/',
      component: 'Home',
      description: 'Landing page with hero section, features, and tools showcase'
    },
    {
      path: '/tools',
      component: 'Tools',
      subItems: [
        { path: '/tools/convert', name: 'Convert PDF', description: 'PDF conversion tools' },
        { path: '/tools/merge', name: 'Merge PDF', description: 'PDF merging functionality' }
      ]
    },
    {
      path: '/preview',
      component: 'Preview',
      description: 'Feature preview and demonstration page'
    }
  ];

  const components = [
    {
      name: 'PdfToolViewer',
      type: 'Component',
      description: 'Base component for PDF tool operations'
    },
    {
      name: 'Navbar',
      type: 'Component',
      description: 'Main navigation component'
    },
    {
      name: 'Footer',
      type: 'Component',
      description: 'Site footer component'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Application Structure
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Routes
        </Typography>
        <List>
          {structure.map((item, index) => (
            <Box key={index}>
              <ListItem>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="subtitle1">{item.path}</Typography>
                      <Chip label={item.component} size="small" color="primary" />
                    </Box>
                  }
                  secondary={item.description}
                />
              </ListItem>
              {item.subItems && (
                <List sx={{ pl: 4 }}>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem key={subIndex}>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="subtitle2">{subItem.path}</Typography>
                            <Chip label={subItem.name} size="small" />
                          </Box>
                        }
                        secondary={subItem.description}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
              {index < structure.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Components
        </Typography>
        <List>
          {components.map((component, index) => (
            <Box key={index}>
              <ListItem>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="subtitle1">{component.name}</Typography>
                      <Chip label={component.type} size="small" color="secondary" />
                    </Box>
                  }
                  secondary={component.description}
                />
              </ListItem>
              {index < components.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default Sitemap;