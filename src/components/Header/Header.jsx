import React from "react";

//import { Autocomplete } from "@mui/material";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
       <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}> 
            Lunch Advisor
        </Typography>
        <Box display="flex">
        <Typography variant="h6" className={classes.title}> 
            Titel1
        </Typography>
       { /* <Autocomplete>*/ }
            <div className={classes.search}> 
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Sök..." classes={{ root: classes.inputRoot, input: classes.inputInput}}/>
            </div>
        {/*</Autocomplete>*/} 
        </Box>
        </Toolbar>
       </AppBar>
    )
}

export default Header;