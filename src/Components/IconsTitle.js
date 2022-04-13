import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Box } from '@mui/material';

export default function IconsTitle(props) {
    return (
        <Box sx={{ marginLeft: 1.5, marginRight: 1.5 }}>
            <img src={props.image}></img>
            <Typography variant="h6" sx={{ fontWeight: '800' }} >{props.name}</Typography>
        </Box>
    )
}


