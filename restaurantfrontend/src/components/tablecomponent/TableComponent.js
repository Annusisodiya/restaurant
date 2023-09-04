import {useEffect,useState} from "react"
import { Paper } from "@mui/material"
import { postData } from "../../services/FetchNodeServices"
import { useNavigate } from 'react-router-dom'
export default  function TableComponent()
{   var navigate=useNavigate()
   var admin=JSON.parse(localStorage.getItem('ADMIN'))
   const [floor,setFloor]=useState([])
   const [table,setTable]=useState([])
   
      const fetchAllFloor=async()=>{
         const result=await postData('tablebooking/fetch_all_floor',{restaurantid:admin.restaurantid});
         setFloor(result.data);
      }
      const fetchAllTable=async(fn)=>{
         const result=await postData('tablebooking/fetch_all_table_by_floor',{restaurantid:admin.restaurantid,floor:fn});
         setTable(result.data);
      }
     
      const showTable=()=>{
         return table.map((item)=>{
            return(<Paper elevation={3} style={{borderRadius:5,width:80,height:80,display:'flex',justifyContent:'center',alignItems:'center',padding:5,margin:8,background:'#d35400',flexDirection:'column'}}>
               <div style={{fontFamily:'kanit',fontWeight:'bold',fontSize:16,color:'#fff',padding:2}}>Table {item.tableno}</div>
               <div style={{fontFamily:'kanit',fontWeight:'600',fontSize:10,color:'#fff',padding:2}}>Chairs {item.noofchairs}</div>
               <div style={{fontFamily:'kanit',fontWeight:'bold',fontSize:16,color:'#fff',padding:2}}>&#8377; {0}</div>
      
            </Paper>)
            })
      
      }



     const showFloor=()=>{
     return floor.map((item)=>{
      return(<Paper onClick={()=>fetchAllTable(item.floor)} elevation={3} style={{borderRadius:5,width:80,height:80,display:'flex',justifyContent:'center',alignItems:'center',padding:5,margin:8,background:'#27ae60'}}>
         <div style={{fontFamily:'kanit',fontWeight:'bold',fontSize:16,color:'#fff',padding:2}}>{item.floor}</div>

      </Paper>)

     })

     }
useEffect(function(){
   fetchAllFloor()
},[])
   
   return(
   <div style={{display:'flex',flexDirection:'column',padding:5}}>
   <div style={{display:'flex',flexWrap:'wrap',marginBottom:10}}>
     {showFloor()}

   </div>
   <div style={{display:'flex',flexWrap:'wrap'}}>
     {showTable()}

   </div>

   </div>
   
   )
}