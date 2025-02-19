import { 
  Modal, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Divider 
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function LoginModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Sign in to PDF Shark
        </Typography>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        <Divider sx={{ my: 2 }}>or</Divider>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
        >
          Continue with Google
        </Button>
      </Box>
    </Modal>
  );
}

export default LoginModal;