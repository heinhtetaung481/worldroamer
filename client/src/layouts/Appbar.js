import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Container, Fab, Divider, Stack, Link, MenuItem, Menu, Hidden, List, ListItem, IconButton, Drawer } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { UserContext } from "../context/UserContext"

const options = [
     'None',
     'Atria',
     'Callisto',
     'Dione',
     'Ganymede',
     'Hangouts Call',
     'Luna',
     'Oberon',
     'Phobos',
     'Pyxis',
     'Sedna',
     'Titania',
     'Triton',
     'Umbriel',
];

const ITEM_HEIGHT = 48;
export default function ButtonAppBar() {
     const [anchorEl, setAnchorEl] = React.useState(null);
     const [userContext, setUserContext] = React.useContext(UserContext)

     const open = Boolean(anchorEl);
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };
     const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
     });

     const toggleDrawer = (anchor, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
               return;
          }

          setState({ ...state, [anchor]: open });
     };

     const logoutHandler = () => {
          fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userContext.token}`,
            },
          }).then(async response => {
            setUserContext(oldValues => {
              return { ...oldValues, details: undefined, token: null }
            })
            window.localStorage.setItem("logout", Date.now())
          })
     }

     const list = (anchor) => (
          <Box
               sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, p: 3, Position: "relative", overflow: "hidden" }}
               role="presentation"
               onClick={toggleDrawer(anchor, false)}
               onKeyDown={toggleDrawer(anchor, false)}
          >
               <Box
                    sx={{
                         position: "absolute",
                         top: 0,
                         right: 0,
                    }}
               >
                    <IconButton>
                         <CloseIcon />
                    </IconButton>
               </Box>
               <List>
                    {['Find Rooms', 'Find Activities', 'Travel Inspiration'].map((text, index) => (
                         <ListItem button sx={{ py: 1 }} key={text}>
                              <Link href="#" underline="none" color="text.primary">{text}</Link>
                         </ListItem>
                    ))}
               </List>
               <Button onClick={logoutHandler} variant="outlined" sx={{ border: "1px solid rgb(151, 39, 128)", borderRadius: "50px", color: "rgb(151, 39, 128)", px: 4 }} size='small' color="inherit" fullWidth>Log Out</Button>
               {/* <Button variant="contained" sx={{ borderRadius: "50px", px: 4, my: 2 }} size='small' color="secondary" fullWidth>Log in</Button> */}
          </Box>
     );


     return (
          <Box sx={{ flexGrow: 1 }}>
               <AppBar position="static" sx={{ bgcolor: "transparent", color: "#000", boxShadow: "none" }}>
                    <Container maxWidth="lg" >
                         <Hidden smDown>
                              <Toolbar sx={{ justifyContent: "space-between" }}>
                                   <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                             <img src={Logo} alt="logo" width="74px" height="50px" />
                                        </Box>
                                        <Box sx={{
                                             display: "flex",
                                             justifyContent: "space-between",
                                             alignItems: "center",
                                             ml: 2,
                                             ".active": {
                                                  backgroundImage: ' linear-gradient(to right, rgb(0, 185, 212), rgb(0, 182, 211) 22%, rgb(0, 114, 188) 44%, rgb(151, 39, 128) 73%, rgb(238, 60, 111))',
                                                  backgroundRepeat: ' no-repeat',
                                                  fontSize: "18px",
                                                  backgroundPosition: "center bottom",
                                                  backgroundSize: " 100% 0.3125rem",
                                                  p: "1.9375rem 0px",
                                                  textDecoration: "none",
                                                  color: "rgb(51, 51, 51)",
                                             },
                                             a: {
                                                  mx: 2,
                                                  fontSize: "16px",
                                                  color: "rgb(51, 51, 51)",
                                             }
                                        }}>
                                             <Link href="#" underline="none" className='active'>Find Rooms</Link>
                                             <Link href="#" underline="none">Find Activities</Link>
                                             <Link href="#" underline="none">Travel Inspiration</Link>
                                             {/* <Button size="large" variant="text" color="inherit">Find rooms</Button>
                                        <Button size="large" variant="text" color="inherit">find Activities</Button>
                                        <Button size="large" variant="text" color="inherit">Travel Inspiration</Button> */}
                                        </Box>
                                   </Box>
                                   <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                   }}>
                                        <Stack
                                             direction="row"
                                             divider={<Divider orientation="vertical" flexItem />}
                                             spacing={2}
                                        >
                                             <Box>
                                                  <Button variant="text" size="large" color="inherit" aria-label="more"
                                                       id="long-button"
                                                       aria-controls={open ? 'long-menu' : undefined}
                                                       aria-expanded={open ? 'true' : undefined}
                                                       aria-haspopup="true"
                                                       onClick={handleClick}>sgd</Button>
                                                  <Menu
                                                       id="long-menu"
                                                       MenuListProps={{
                                                            'aria-labelledby': 'long-button',
                                                       }}
                                                       anchorEl={anchorEl}
                                                       open={open}
                                                       onClose={handleClose}
                                                       PaperProps={{
                                                            style: {
                                                                 maxHeight: ITEM_HEIGHT * 4.5,
                                                                 width: '20ch',
                                                            },
                                                       }}
                                                  >
                                                       {options.map((option) => (
                                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                                 {option}
                                                            </MenuItem>
                                                       ))}
                                                  </Menu>
                                             </Box>
                                             <Button onClick={logoutHandler} variant="outlined" sx={{ border: "1px solid rgb(151, 39, 128)", borderRadius: "50px", color: "rgb(151, 39, 128)", px: 4 }} size='large' color="inherit">Log Out</Button>
                                        </Stack>
                                        {/* <Fab sx={{ mx: 1, bgcolor: "rgb(151, 39, 128)", px: 4 }} variant="extended" color="secondary" aria-label="add">
                                             Sign up
                                        </Fab> */}
                                   </Box>
                              </Toolbar>
                         </Hidden>
                         <Hidden mdUp>
                              <Toolbar sx={{ justifyContent: "space-between" }}>
                                   <Box>
                                        <img src={Logo} alt="logo" width="54px" height="41px" />
                                   </Box>
                                   <Box>
                                        {['left'].map((anchor) => (
                                             <React.Fragment key={anchor}>
                                                  <IconButton onClick={toggleDrawer(anchor, true)}><MenuIcon /></IconButton>
                                                  <Drawer
                                                       anchor={anchor}
                                                       open={state[anchor]}
                                                       onClose={toggleDrawer(anchor, false)}
                                                  >
                                                       {list(anchor)}
                                                  </Drawer>
                                             </React.Fragment>
                                        ))}
                                   </Box>
                              </Toolbar>
                         </Hidden>
                    </Container>
               </AppBar>
          </Box >
     );
}
