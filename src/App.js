import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
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
import { useState } from 'react';
import Get from './components/Get';
import GetCont from './components/content/GetCont';
import DeleteCont from './components/content/DeleteCont'
import Delete from './components/Delete';
import Put from './components/Put';
import Post from './components/Post';
import PostCont from './components/content/PostCont';
import PutCont from './components/content/PutCont';
import PatchCont from './components/content/PatchCont';
import Patch from './components/Patch';
import AxiosALL from './components/AxiosALL';
import AxiosAll from './components/content/AxiosAll';
import AxiosIntersepctCont from './components/content/AxiosIntersepctCont';
import AxiosIntersepct from './components/AxiosIntersepct';
import CustomHeadersCont from './components/content/CustomHeadersCont';
import CustomHeaders from './components/CustomHeaders';
import ErrorCont from './components/content/ErrorCont';
import ErrorHand from './components/ErrorHand';
import CancelToken from './components/CancelToken';
import CancelTokenCont from './components/content/CancelTokenCont';
import AxiosInstance from './components/AxiosInstance';





const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
               AXIOS
              </Typography> */}

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
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
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">GET</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">POST</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">PUT</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Get />
                </Button>
                
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Post />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Put />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Patch />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Delete />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <AxiosALL />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <AxiosIntersepct />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <CustomHeaders />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <ErrorHand />
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <CancelToken/>
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <AxiosInstance />
                </Button>

              </Box>


            </Toolbar>
          </Container>
        </AppBar>

        <Route path={'/getcont'} component={GetCont} />
        <Route path={'/deletecont'} component={DeleteCont} />
        <Route path={'/postcont'} component={PostCont} />
        <Route path={'/putcont'} component={PutCont} />
        <Route path={'/patchcont'} component={PatchCont} />
        <Route path={'/axiosallcont'} component={AxiosAll} />
        <Route path={'/axiosintersectcont'} component={AxiosIntersepctCont} />
        <Route path={'/customheaderscont'} component={CustomHeadersCont} />
        <Route path={'/errorhandcont'} component={ErrorCont} />
        <Route path={'/canceltokencont'} component={CancelTokenCont} />
        <Route path={'/AxiosInstancecont'} component={AxiosIntersepctCont} />

      </Router>
    </div>
  );
}

export default App;
