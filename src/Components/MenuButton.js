import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Typography,} from '@mui/material';

export default function MenuButton(props) {
  return (
        <Typography variant='h6' sx={{color:'#696969',"&:hover": {
            textDecoration:'underline',cursor: "pointer"}}} > {props.name} </Typography>
  );
}


