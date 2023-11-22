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
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from './MainListItems';
import SearchIcon from '@mui/icons-material/Search';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
// import { Button, Card } from 'react-bootstrap';
import { CardContent, Card, Button, CardMedia, Avatar, InputBase } from '@mui/material';
import {  NavDropdown } from 'react-bootstrap';
import computer from "../images/cover.jpeg"
import user from "../images/user.jpg"
import AllAnnouncementHook from '../hook/announcement/all-announcement-hook';
import AllQuizHook from '../hook/quiz/all-quiz-hook';
import { useNavigate } from 'react-router-dom';


let userName = localStorage.getItem("userName")
let role = localStorage.getItem("role")
 
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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

    // Use useEffect to run the navigation logic once when the component mounts
    React.useEffect(() => {
      // Check if there is a userId in localStorage
      const userId = localStorage.getItem("userId");
  
      // If userId is not empty, navigate to the dashboard, else navigate to the login page
      if (userId) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }, [navigate]);

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
 const [res] = AllAnnouncementHook()
 const [resQuiz]= AllQuizHook()
 console.log(resQuiz);

 console.log(res)
 if(res.data){
  console.log(res.data[0].content)
  console.log(res.data[0].userId.course)
  console.log(res.data[0].userId.name)
  console.log(res.data[0]._id)
 }
 if (resQuiz.data) {
    console.log(resQuiz);
    
 }

 
const logOut = () =>{
    localStorage.removeItem("userName")
    localStorage.removeItem("role")
    localStorage.removeItem("userId")
    localStorage.removeItem("token")  //عشان امسح كل حاجه بخصوص اليوزر
    //window.location.reload() //عملت ريفريش للصفحه بعد تسجيل الخروج
    navigate("/login");
   
   }

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

            {
                role === 'admin' ?( <NavDropdown title={userName} id="nav-dropdown" style={{color : '#116A7B'}}>
                <NavDropdown.Item href="/announcement">Announcement</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/quiz">Quiz</NavDropdown.Item>
               
               
               
              </NavDropdown>) : (null)
            }

            {/* <NavDropdown title={userName} id="nav-dropdown" style={{color : '#116A7B'}}>
        <NavDropdown.Item href="/announcement">Announcement</NavDropdown.Item>
        <NavDropdown.Item href="/quiz">Quiz</NavDropdown.Item>
       
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
                                       
                                        
                                        
                                                     

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
            <Button 
    onClick={logOut}
                     variant="contained" color="primary" sx={{ backgroundColor: '#33BBC5'   ,marginLeft:'15px'}}>
                                  log out 
                                </Button>


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
    Exams Time
</Typography>
<Typography
    variant="body1"
    paragraph
    sx={{
        fontSize: '15px',
        color: '#8B7E74',   // Set text color to #8B7E74
        lineHeight: 1.2,
        margin: '15px',
    }}
>
    Here we are, Are you ready to fight? Don't worry, we prepared some tips to <br />be ready for your exams.
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
    "Nothing happens until something moves" - Albert Einstein
</Typography>
                                        </Grid>

                                        {/* Right Column */}
                                       
                                        <Grid item xs={12} sm={4}>
    <CardMedia
        component="img"
        height="140"
        alt="Image"
        src={computer} // Replace with the actual image URL
        sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', padding: 0, margin: 0 , maxWidth:'100%' }}
    />
    
</Grid>
                    <Button variant="contained" color="primary" sx={{ backgroundColor: '#33BBC5'   ,marginLeft:'15px'}}>
                                    View Examples tpes
                                </Button>
                                       
                                    </Grid>
                                  
                                </Grid>
                               
                            </Paper>



    <Grid container spacing={2} style={{marginTop:"20px"}}>
      {/* First row */}
      <Grid item xs={8}>
      <Paper>
        <div style={{  display: 'flex'  , justifyContent :'space-between', alignItems: 'center' , padding : '15px'}}>
        <Typography variant="h6" component="div">
        Announcements<br></br> </Typography>
    
    <Typography variant="h6" component="div" style={{ color: '#33BBC5' }} >
        All    
    </Typography>
        </div>
   
        <Typography
    variant="body2"
    paragraph
    sx={{
        fontSize: '12px',
        color: '#8B7E74',   // Set text color to #8B7E74
        lineHeight: 1.2,
        paddingLeft: '15px'
    }}
>
    Here we are, Are you ready to fight? Don't worry
</Typography>


{
    res && res.data ? (
        res.data.map((item:any) => {
            return (
        <Card>
          <div
            style={{
            
              display: 'flex',
              alignItems: 'center', // Center vertically
              justifyContent: 'center', // Center horizontally
              padding: '16px', // Optional: Add padding for spacing
            }}
          >
            {/* Left Column */}

            <Typography  component="div" style={{ marginTop: '-15px' , display :'flex'}} >
            <Avatar
              alt="Remy Sharp"
              src={user}
              sx={{ width: 56, height: 56 }}
            />

            <div>
            <Typography variant="body2"  style={{ marginTop: '10px' }}>
                {item.userId.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
                <small>{item.updatedAt}</small>
              </Typography>

            </div>
 

         </Typography>
    
            {/* Right Column */}
            <CardContent style={{ marginLeft: '16px', flex: 1 }}>
              {/* <Typography variant="h5" component="div">
                Name
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
                <small>Last updated 3 mins ago</small>
              </Typography> */}
              <Typography variant="body2" color="text.secondary" paragraph>
                {item.content}
              </Typography>
            </CardContent>
          </div>
        </Card>
            )
})):<h4>No Data Found</h4>
    }
      



     
       










        
        <Card>
          <div
            style={{
            
              display: 'flex',
              alignItems: 'center', // Center vertically
              justifyContent: 'center', // Center horizontally
              padding: '16px', // Optional: Add padding for spacing
            }}
          >
            {/* Left Column */}

            
          
          </div>
        </Card>
        
      </Paper>
    </Grid>






      <Grid item xs={4}>
      <Paper sx={{  padding: '16px'  }}>
        <div style={{  display: 'flex'  , justifyContent :'space-between', alignItems: 'center'}}>
        <Typography variant="h6" component="div">
        What's due<br></br> </Typography>
    
    <Typography variant="h6" component="div" style={{ color: '#33BBC5' }} >
        All    
    </Typography>
        </div>
   


<Typography
    variant="body2"
    paragraph
    sx={{
        fontSize: '12px',
        color: '#8B7E74',   // Set text color to #8B7E74
        lineHeight: 1.2,
    }}
>
    Here we are, Are you ready to fight? Don't worry
</Typography>
               

{
    resQuiz && resQuiz.data ? (
        resQuiz.data.map((item:any) => {
            return (
                <div>
                <Typography key={item.id} variant="body2" component="div"  >


                <Typography variant="body2" component="div" style={{display : 'flex'}} >
                
                <HourglassTopIcon style={{ color: '#33BBC5' }}  />    
                <Typography variant="h6" component="div" style={{ fontSize:'15px' }} >
                       {item.title}
                    </Typography>
                    
                    </Typography>
                     
                    <Typography variant="body2" component="div"  sx={{ color: '#8B7E74',}} >
                        cousre : {item.userId.course}
                        <br>
                        </br>
                        Topic : {item.topic}
                        <br>
                        </br>
                        Due to : {item.dueTo}
                        </Typography>
                        <Button variant="contained" color="primary" sx={{backgroundColor: '#fff', border : ' 3px solid #33BBC5', marginTop : '10px' ,  borderRadius : '10px' , color: '#33BBC5', width:'100%' ,  textTransform: 'lowercase' }}>
                  Start Quiz
                </Button>
                    </Typography>
                    
                    <hr></hr>
                    </div>
            )
            })
            ) : <h4>data not found</h4>
            }
                
        

    
</Paper>



      </Grid>
    



      
    </Grid>





                            {/* Recent Deposits */}

                            {/* Recent Orders */}

                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    );
}