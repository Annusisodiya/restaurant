import {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Button,Dialog,DialogActions,DialogContent, TextField } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { getData,serverURL,postData } from '../../services/FetchNodeServices';

export default function FoodComponent(props) {
    const [listFood,setListFood]=useState([]);
    const [tempListfood,setTempListFood]=useState([]);
     
    var admin=JSON.parse(localStorage.getItem('ADMIN'))   
  useEffect(function(){
    fetchAllFood()
},[props]);

const fetchAllFood=async()=>{
    var result=await postData('fooditem/fetch_all_fooditem_categorywise',{restaurantid:admin.restaurantid,categoryid:props.categoryid})
    setListFood(result.data)
    setTempListFood(result.data)
 
   };

   const searchFood=(e)=>{
    var temp = listFood.filter((item)=>item.fooditemname.toLowerCase().startsWith(e.target.value.toLowerCase))
    if(e.target.value.length==0)
    setListFood(tempListfood)
    setListFood(temp)
   }
const  showFoodList=()=>{
   return listFood.map((item)=>{
   return( 
    <div>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`${serverURL}/images/${item.icon}`} sx={{width:30,height:30}} />
        </ListItemAvatar>
        <ListItemText
          primary={item.fooditemname}
          secondary={item.offerprice>0?item.offerprice:item.price}
        />
      </ListItemButton>
     
    </List>
 </div>)
   })

}
const handleDialogClose=()=>{
    props.setOpen(false);
   
   }
const showFoodDialog=()=>{
    return(
     <Dialog
     maxWidth={'sm'}
       open={props.open}>
         <DialogContent  >
          <TextField onChange={((e)=>searchFood(e.target.value))} fullWidth label="Search food item.." variant="standard"/>
             {showFoodList()}
         </DialogContent>
        <DialogActions>
        
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
     </Dialog>
    )}



  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {showFoodDialog()}
    </Box>
  );
}
