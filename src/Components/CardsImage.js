import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../App.css"
export default function CardsImage(props) {
    return (
        <Box>
            <img src={props.image} className="imgCard"></img>
            <Typography variant="h6" sx={{ fontWeight: '700' }} >
                {props.title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: '400' }} >
                <ArrowForwardIosIcon sx={{ fontSize: '0.8rem', color: '#1E90FF' }} />{props.title2}
            </Typography>
        </Box>
    )
}


