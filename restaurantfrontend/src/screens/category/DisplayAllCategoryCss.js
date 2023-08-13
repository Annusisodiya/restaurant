import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  rootDisplay: {
    width:"auto",
    height:"100vh",
    background:"#dfe4ea",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  boxDisplay:{
    width:"60%",
    height:"auto",
    borderRadius:10,
    background:"#fff",
    padding:15
  },
  center:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
});