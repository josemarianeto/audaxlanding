import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';
import logo from "./Assets/Imagens/audaxvision_logo_vision.svg";
import banner from "./Assets/Imagens/Banner3.png"
import MenuButton from './Components/MenuButton';
import './App.css'

export default function App() {
  return (
    <Box className="ContainerAudax">
      <AppBar position='absolute' sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ padding: 2, display: 'flex', justifyContent: "space-around" }}>
          <img src={logo} width="200px" />
          <MenuButton name="Visão Saudável" className="MenuButton" />
          <MenuButton name="Lentes" />
          <MenuButton name="Tecnologias" />
          <MenuButton name="Inovação" />
          <MenuButton name="Audax" />
        </Toolbar>
      </AppBar>


      <Box className='BoxMainImage'>
        <img src=""></img>
        <Typography variant='body1'>teste</Typography>
      </Box>
    </Box>
  );
}


