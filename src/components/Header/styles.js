import {  makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    title: {
      display: 'none',
      textAlign: 'left',
    },
    search: {
      position: 'absolute',
        
    },
    searchIcon: {
      height: '100%', 
      position: 'absolute', 
    },
    inputRoot: {
      color: 'inherit',
      justifyItems: 'right'
    },
    inputInput: {
       width: '100%',
    },
    toolbar: {
      display: 'flex', justifyContent: 'space-between',
    },
  }));