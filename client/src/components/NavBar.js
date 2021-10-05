import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles(() => ({
  bar: {
    backgroundColor: "#826848",
  }
}));

function NavBar({ handleLogout }) {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorel] = useState(null);
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorel(event.target);
  }

  const handleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorel(null);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.bar} id="bar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: "top", horizontal: "left"}}
            transformOrigin={{vertical: "top", horizontal: "left"}}
            open={open}
            onClose={()=> setAnchorel(null)}
          >
            <MenuItem onClick={()=> handleMenuClick('/mainpage')}>Home</MenuItem>
            <MenuItem onClick={()=> handleMenuClick('/cart')}>Cart</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Oldegg
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
