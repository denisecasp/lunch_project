import React, {useState} from "react";

import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import Places from '../Places/Places'

import useStyles from './styles'

const List = () => {

    const classes = useStyles();

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const places = [
        { name: 'Alternativ 1'},
        { name: 'Alternativ 2' },
        { name: 'Alternativ 3'},
        { name: 'Alternativ 4' }
    ]

    return (
        <div className={classes.container}>
            <Typography variant="h4">Lunchställen nära dig</Typography>
            <FormControl className={classes.formControl}>
            <InputLabel>Type??</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)} >
                <MenuItem value="restaurants">Restauranger</MenuItem>
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel>Ratings</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)} >
                <MenuItem value={0}>Visa alla</MenuItem>
                <MenuItem value={3}>Över 3 i betyg</MenuItem>
                <MenuItem value={4}>Över 4 i betyg</MenuItem>
                <MenuItem value={4.5}>Över 4.5 i betyg</MenuItem>
            </Select>
            </FormControl>
        
            <Grid container spacing={3} className={classes.list}>
              {places.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <Places place={place}/>
                    </Grid>
              ))}
            </Grid>
        </div>
    )
}

export default List;