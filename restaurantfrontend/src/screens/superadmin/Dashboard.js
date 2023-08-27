import {useState} from 'react';
import {
  Avatar,
  Grid,
  Box, 
  AppBar,Toolbar,Paper,Typography
} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import RestaurantInterface from "../restaurant/RestaurantInterface"
import DisplayAllRestaurant from "../restaurant/DisplayAllRestaurant"
import { Route,Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './DashboardCss';



export default function Dashboard(props){
   var classes=useStyles()
   var navigate=useNavigate()
  return(
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        
        <Typography variant="h6" color="inherit" component="div">
          Super Admin
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container spaces={3} >
      <Grid item xs={2}>
        <Paper className={classes.leftBarStyle}>
          <Avatar src='' variant="circular"  style={{width:80,height:80}} />
          <div className={classes.nameStyle}>Annu Sisodiya</div>
          <div className={classes.emailStyle}>dasp196@gmail.com</div>
          <div className={classes.phoneStyle}>+919301123085</div>

      <div className={classes.menuStyle}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/dashboard/restaurantinterface')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={<span className={classes.menuItemStyle}>Add restaurant</span>} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/dashboard/displayallrestaurant')}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={<span className={classes.menuItemStyle}>Restaurant List</span>} />
            </ListItemButton>
          </ListItem>
         
           <Divider variant='inset'  />
          
            
  
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={<span className={classes.menuItemStyle}>Logout</span>} />
            </ListItemButton>
          </ListItem>



       
        </List>
       
     
      </div>
    
      </Paper> 
      


      </Grid>
      <Grid item xs={10} style={{padding:25,background: "#dfe4ea"}}>
      <Routes>
         <Route element={<RestaurantInterface/>} path='/restaurantinterface' />
         <Route element={<DisplayAllRestaurant/>} path='/displayallrestaurant' />
       </Routes>  
      </Grid>

    </Grid>
  </Box>
  )

}