import { React, useState, useEffect } from "react";
import { Hidden, Grid, Stack, Typography, Menu, MenuItem, IconButton, Avatar, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
        <>
          <Grid item xs={10} sm={8} md={6}
            container justifyContent={'flex-start'}
          >
            <Typography variant="h4">Logo</Typography>
            <Typography variant="h4">Logo 1</Typography>
          </Grid>
          <Hidden smDown>
            <Grid item sm={4} md={6}
              container justifyContent={'flex-end'}
              >            
              <Stack direction={'row'} spacing={2}>
                <Link to='/first_react_app/'>Home</Link>
                <Link to='/first_react_app/about'>About Us</Link>
                <Link to='/first_react_app/contact'>Contact Us</Link>
              </Stack>
            </Grid>
            </Hidden>
            {/* Burger menu for small screen  */}
            <Hidden smUp>
              <Grid item xs={2} sm={4} md={6} container justifyContent={'flex-end'}>
                <IconButton
                  // asize="large"
                  // edge="start"
                  // color="inherit"
                  // aria-label="menu"
                  // aria-controls="menu-appbar"
                  // aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon fontSize="large"/>
                </IconButton>
              </Grid>
            </Hidden>
            {/* Menu will open on click of burgur menu icon */}
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onClick={handleClose}
            >
              <MenuItem
                onClick={handleClose}
              >
                <Link to='/'>Home</Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to='/about'>About Us</Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
              >
                <Link to='/contact'>Contact Us</Link>
              </MenuItem>
            </Menu>
        </>
  );
};

export default Navbar;