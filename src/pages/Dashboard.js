import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { BarChart, Description, History } from '@mui/icons-material';

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      
      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <BarChart color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6">Files Processed</Typography>
            <Typography variant="h4">24</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Description color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6">Storage Used</Typography>
            <Typography variant="h4">45 MB</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <History color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6">Recent Files</Typography>
            <Typography variant="h4">12</Typography>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>Recent Activity</Typography>
            <RecentActivityList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;