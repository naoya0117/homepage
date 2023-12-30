import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, MenuItem, useMediaQuery, useTheme, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const items = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact'}
  ]

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default">
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
