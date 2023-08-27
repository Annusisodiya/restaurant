import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root: {
      width: "100vw",
      height: "100vh",
      background: "#dfe4ea",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      width: "60%",
      height: "auto",
      borderRadius: 10,
      background: "#fff",
      padding: 15,
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
      
    },
    leftBarStyle:{
      padding:5,
      display: "flex",
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center",
      margin:10,
  
  
    },
    nameStyle:{
     fontFamily:'Kanit',
     fontSize:16,
     fontWeight:'bold',
     marginTop:5,
     marginBottom:2
  
    },
    phoneStyle:{
      fontFamily:'Kanit',
      fontSize:12,
      fontWeight:'bold',
     
      color:'#636e72'
   
     },
     emailStyle:{
      fontFamily:'Kanit',
      fontSize:12,
      fontWeight:'bold',
      
      color:'#636e72'
     },
     menuStyle:{
      fontFamily:'Kanit',
      fontSize:18,
      fontWeight:'bold',
      display:'flex',
      justifyContent:'left',
      width:250,
       
  
  
     },
     menuItemStyle:{
      fontFamily:'Kanit',
      fontSize:16,
      fontWeight:'bold',
      
     }
    });