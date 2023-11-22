// MainListItems.tsx

import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchIcon from '@mui/icons-material/CalendarMonth';
import CourseIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingIcon from '@mui/icons-material/TrendingUp';

const MainListItems: React.FC = () => (
  
  <React.Fragment>
    
    <ListItemButton style={{ marginTop: '20px' }} sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }}>
  <ListItemIcon style={{ color: '#fff' }}   >
    <DashboardIcon sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }}/>
  </ListItemIcon>
  <ListItemText primary="Dashboard" />
</ListItemButton>


    <ListItemButton style={{ marginTop: '20px' }} sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }} >
      <ListItemIcon style={{color : '#fff'}} >
        <SchIcon sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }}/>
      </ListItemIcon>
      <ListItemText primary="Schedule" />
    </ListItemButton>



    <ListItemButton style={{ marginTop: '20px' }} sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }}>
      <ListItemIcon style={{color : '#fff'}} >
        <CourseIcon sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }}/>
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItemButton>


    <ListItemButton style={{ marginTop: '20px' }} sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }} >
      <ListItemIcon style={{color : '#fff'}} >
        <SchoolIcon  sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }}/>
      </ListItemIcon>
      <ListItemText primary="Gradebook" />
    </ListItemButton>


    <ListItemButton style={{ marginTop: '20px' }} sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }} >
      <ListItemIcon style={{color : '#fff'}}  >
        <TrendingIcon sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }} />
      </ListItemIcon>
      <ListItemText primary="Performance" />
    </ListItemButton>



    <ListItemButton style={{ marginTop: '20px' }} sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }} >
      <ListItemIcon style={{color : '#fff'}} >
        <CampaignIcon sx={{ '&:hover': { backgroundColor: '#fff' ,  color: '#33BBC5' } }} />
      </ListItemIcon>
      <ListItemText primary="Announcement" />
    </ListItemButton>

    {/* <Button 
    onClick={logOut}
                    
                     variant="contained" color="primary" sx={{ backgroundColor: '#33BBC5'   ,marginLeft:'15px'}}>
                                  log out 
                                </Button> */}
                                       

  </React.Fragment>


);

export default MainListItems;
