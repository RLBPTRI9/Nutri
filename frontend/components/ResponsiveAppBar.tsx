import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReturnedState } from '../features/authSlice';
import axios from 'axios';

type Page = {
  pageName: string;
  href: string;
};

type Setting = {
  name: string;
  shouldDisplay: boolean;
  action: (...any: any) => void;
};

const pages: Page[] = [
  { pageName: 'Add Allergies', href: '/' },
  { pageName: 'Search Recipes', href: '/recipes' },
  { pageName: 'Favorites', href: '/favorites' },
];

function ResponsiveAppBar(props: any) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const user = useSelector<ReturnedState, ReturnedState>((state) => state);
  const settings: Setting[] = [
    {
      name: 'Logout',
      shouldDisplay: user.auth.isLoggedIn,
      action: () => {
        axios
          .post('/api/auth/logout')
          .then(() => (window.location.href = '/login'));
      },
    },
    {
      name: 'Login',
      shouldDisplay: !user.auth.isLoggedIn,
      action: () => {
        navigate('/login');
      },
    },
  ];

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavClick = (e: React.MouseEvent, page?: Page) => {
    e.preventDefault();
    if (page) navigate(page.href);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <LocalDiningIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            NUTRI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page.pageName}
                  // onClickCapture={(e) => handleNavClick(e, page)}
                  onClick={(e) => handleNavClick(e, page)}>
                  <Typography textAlign='center'>{page.pageName}</Typography>
                  {/* // <Link to={page.href}>{page.pageName}</Link> */}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Nutri
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.pageName}
                href={page.href}
                onClick={(e) => handleNavClick(e, page)}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.pageName}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ManageAccountsIcon
                  style={{ fontSize: 35 }}
                  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                />
                {/* <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  style={{ display: setting.shouldDisplay ? '' : 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setting.action(e);
                  }}>
                  <Typography textAlign='center'>{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
