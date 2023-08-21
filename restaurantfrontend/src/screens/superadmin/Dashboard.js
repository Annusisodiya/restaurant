import { useState } from "react";
import {  Avatar, AppBar, Toolbar, Box, Typography, Grid, Paper, avatarClasses,} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    },
    nameStyle:{
        fontFamily:'kanit',
        fontSize:16,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:2,
    },
    phoneStyle:{
        fontFamily:'kanit',
        fontSize:12,
        fontWeight:'bold',
        
        color:"#535c68"
    },
    emailStyle:{
        fontFamily:'kanit',
        fontSize:12,
       fontWeight:'bold',
        
        color:"#535c68"

    }
    
  });

export default function Dashboard(props){
    var classes= useStyles()
    return(
        
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div">
            Super Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <Paper className={classes.leftBarStyle}>
                <Avatar src='' variant="circular" style={{width:80,height:80}} />
                <div className={classes.nameStyle}>Annu Sisodiya</div>
                <div className={classes.emailStyle}>aa@gmail.com</div>
                <div className={classes.phoneStyle}>+91932912345</div>
            </Paper>

        </Grid>

      </Grid>
    </Box>
  
        
    )
}