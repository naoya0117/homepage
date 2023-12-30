import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, MenuItem, useMediaQuery, useTheme, Drawer, Menu, Dialog, DialogTitle, DialogContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { LoginForm } from '@/features/auth';
const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const items = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact'}
  ]

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" style={{ marginRight: '16px' }} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <a href="/">Naoya's portfolio</a>
          </Typography>
          {!isMobile && items.map((item) => (
            <Button color="inherit" href={item.href}>
              <Link to={item.href}>{item.name}</Link>
            </Button>
          ))}
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon style={{ color: 'white' }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClickOpen}>Login</MenuItem>
          </Menu>
          <Dialog open={open} onClose={handleCloseDialog}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <LoginForm />
            </DialogContent>
          </Dialog>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={handleDrawerClose}>
        <div
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          {items.map((item) => (
            <MenuItem>
              <Link to={item.href}>{item.name}</Link>
            </MenuItem>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
