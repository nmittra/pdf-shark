import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TreeView, 
  TreeItem,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import {
  ExpandMore,
  ChevronRight,
  CreateNewFolder,
  MoreVert,
  Folder,
  Description
} from '@mui/icons-material';

function FileOrganizer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [newFolderDialog, setNewFolderDialog] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleMenuOpen = (event, nodeId) => {
    setAnchorEl(event.currentTarget);
    setSelectedNode(nodeId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedNode(null);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">File Organization</Typography>
        <IconButton onClick={() => setNewFolderDialog(true)}>
          <CreateNewFolder />
        </IconButton>
      </Box>

      <TreeView
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
      >
        <TreeItem 
          nodeId="1" 
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Folder color="primary" />
                <span>Documents</span>
              </Box>
              <IconButton size="small" onClick={(e) => handleMenuOpen(e, "1")}>
                <MoreVert />
              </IconButton>
            </Box>
          }
        >
          <TreeItem 
            nodeId="2" 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Description />
                <span>Report.pdf</span>
              </Box>
            }
          />
        </TreeItem>
      </TreeView>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>Rename</MenuItem>
        <MenuItem>Move</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>

      <Dialog open={newFolderDialog} onClose={() => setNewFolderDialog(false)}>
        <DialogTitle>Create New Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Folder Name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewFolderDialog(false)}>Cancel</Button>
          <Button onClick={() => setNewFolderDialog(false)} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default FileOrganizer;