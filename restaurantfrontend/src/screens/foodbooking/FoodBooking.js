import {useEffect,useState} from 'react'
import { TextField,Grid,Select,InputLabel,MenuItem,FormControl } from '@mui/material'
import { useStyles } from "./FoodBookingCss";
import { postData } from '../../services/FetchNodeServices';
import TableComponent from '../../components/tablecomponent/TableComponent';


export default function FoodBooking(props)
{ const classes=useStyles();
    var admin=JSON.parse(localStorage.getItem('ADMIN'))
    const [currentDate,setCurrentDate]=useState('') 
    const [waiter,setWaiter]=useState([]);
   const [waiterId,setWaiterId]=useState("");

    const getCurrentDate=()=>
    {
     var date=new Date()
     var cd=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()
     return cd
    }
    const getCurrentTime=()=>{
        var time=new Date()
        var ct=time.getHours()+":"+time.getMinutes()
        return ct
           
    }
    const fetchAllWaiter=async()=>{
        const result=await postData('waiter/fetch_all_waiter',{restaurantid:admin.restaurantid});
        setWaiter(result.data);
     }
   
    useEffect(function(){
        setCurrentDate(getCurrentDate()+" "+getCurrentTime())
        fetchAllWaiter();

    },[])

    const fillWaiter=()=>{
        return waiter.map((item)=>{
          return <MenuItem value={item.waiterid}>{item.waitername}</MenuItem>
        });
      }
    return(<div className={classes.root}>
        <div className={classes.box}>
        <Grid container spacing={3}>
        <Grid item xs={3}>
            <TextField label="Current Date"  value={currentDate}/>
            </Grid> 
            <Grid item xs={3}>
           <FormControl fullWidth>
            <InputLabel>Waiter Name</InputLabel>
            <Select label={"Category Name"} 
              
               onChange={(event)=>setWaiterId(event.target.value)} 
              value={waiterId}>
              <MenuItem>-Select Waiter-</MenuItem>
              {fillWaiter()}
            </Select>
               
           </FormControl>
        </Grid>
        </Grid>
        
        </div>
        <div className={classes.box}>
        <TableComponent />
        </div>
         
    </div>)
}