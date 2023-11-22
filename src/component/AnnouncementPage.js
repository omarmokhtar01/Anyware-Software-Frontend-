import * as React from 'react';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from './MainListItems';
import SearchIcon from '@mui/icons-material/Search';
// import { Button, Card } from 'react-bootstrap';
import {  Button, InputBase } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AddAnnonucementHook from '../hook/announcement/add-annonucement-hook';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//const [content, loading, isPress, handelSubmit, onChangeContent] =AddAnnonucementHook()


let userName = localStorage.getItem("userName")

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();






export default function Dashnew() {

    const navigate = useNavigate(); // بتنقلني في اي صفحة أنا عايزاها


    React.useEffect(() => {
      // Check if there is a userId in localStorage
      const role = localStorage.getItem("role");
    
      // If userId is not empty, navigate to the dashboard, else navigate to the login page
      if (role === "admin") {
        navigate("/announcement");
      } else {
        navigate("/login");
      }
    }, [navigate]);
    


    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

 const [content, loading, onSubmit, onChangeContent] =AddAnnonucementHook()
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'center',
                pr: '24px', // keep right padding when drawer closed
                backgroundColor: '#fff', // Set background color to red
            }}
        >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>

            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, color: '#116A7B', fontSize: '25px', fontWeight: 800 }}
            >
                Welcome {userName},
            </Typography>

            <div style={{ position: 'relative', borderRadius: '50px', border : ' 1px solid #EBE3D5' , height :'38px' , backgroundColor: '#fff', marginLeft: '2px' }}>
                <IconButton sx={{ p: '10px' }}>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    sx={{
                        p: '1px',
                        flexGrow: 1,
                        marginLeft: '8px',
                      
                    }}
                />
            </div>

            <IconButton color="inherit" sx={{ color: '#116A7B' }}>
                <Badge badgeContent={4}>
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Toolbar>

                </AppBar>
                <Drawer variant="permanent" open={open}>


                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center', // Center the content horizontally
                            px: [1],
                        }}
                    >
<a href='/' style={{ textDecoration: 'none', color: 'white' }}>
  <h2 style={{ textDecoration: 'none', color: 'white' }}>Coligo</h2>
</a>                        {/* <IconButton onClick={toggleDrawer}>
                                        <ChevronLeftIcon />
                                    </IconButton> */}
                    </Toolbar>

                    <Divider />
                    <List component="nav">


                        <MainListItems />



                        <Divider sx={{ my: 1 }} />
                        {/* {secondaryListItems} */}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <div className='main'>
                        <Grid container spacing={3}>





                            <Paper
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    flexGrow: 1,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >




                                <Grid sx={{ width: '100%' }}>
                                    <Grid container>
                                        {/* Left Column */}
                                        <Grid item xs={12} sm={8}>
<Typography
    variant="h2"
    gutterBottom
    sx={{
        margin: '15px',
        fontWeight: 500,  // Set font weight to extra bold
        textTransform: 'uppercase',
        backgroundImage: 'linear-gradient(to right,#116A7B, #CEE6F3)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',  // Ensuring the text color is transparent
       
    }}
>
    Add Announcemwnt
</Typography>

                                            <Typography
                                                variant="body1"
                                                paragraph
                                                sx={{
                                                    fontSize: '15px',
                                                    paddingTop:'1px',
                                                    color: '#AEC2B6',  // Set text color to #AEC2B6
                                                    fontStyle: 'italic',
                                                    margin: '15px',
                                                    
                                                }}
                                            >
    

    <TextareaAutosize
    value={content}
    onChange={onChangeContent}
      aria-label="minimum height"
      minRows={3}
      placeholder="Enter your announcement here"
      style={{ width: '100%', outline :'none' , border: '2px solid #33BBC5' , borderRadius :'10px' , padding :'10px'}}
    />
</Typography>
                    </Grid>

                                        {/* Right Column */}
                                       
                    <Grid item xs={12} sm={4}>

    
</Grid>
                    <Button
                     onClick={onSubmit}
                     variant="contained" color="primary" sx={{ backgroundColor: '#33BBC5'   ,marginLeft:'15px'}}>
                                    Save
                                </Button>
                                       
                                    </Grid>
                                  
                                </Grid>
                               
                            </Paper>



    <Grid container spacing={2} style={{marginTop:"20px"}}>
      {/* First row */}
      <Grid item xs={8}>
    
    </Grid>

    </Grid>

                        </Grid>
                       
                    </div>
                </Box>
            </Box>
            <ToastContainer />
        </ThemeProvider>
    );
}