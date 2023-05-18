import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
//import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:900px)');



    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBYrV501SwGTqexub8U6JbqIJ44cxGx5I4'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={18}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                   setCoordinates({ lat: e.center.lat, lng: e.center.lng }) // latitude & longitude
                   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }) // ne: northeast sw: southwest
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;