import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import logo from "./Assets/Imagens/audaxvision_logo_vision.svg";
import banner from "./Assets/Imagens/novoBanner.png"
import card1 from "./Assets/Imagens/img 1.png"
import card2 from "./Assets/Imagens/img 2.png"
import card3 from "./Assets/Imagens/img 3.png"
import cardGlobo from "./Assets/Imagens/img 4.png"
import cardWindow from "./Assets/Imagens/cardWindow.png"
import MenuButton from './Components/MenuButton';
import './App.css'
import IconsTitle from './Components/IconsTitle';
import CardsImage from './Components/CardsImage';

export default function App() {
  return (
    <Box className="ContainerAudax">
      <AppBar position='absolute' sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ padding: 2, display: 'flex', justifyContent: "space-around", width: { md: '100vw', lg: '95vw' } }} >
          <img src={logo} width="200px" />
          <MenuButton name="Visão Saudável" className="MenuButton" />
          <MenuButton name="Lentes" />
          <MenuButton name="Tecnologias" />
          <MenuButton name="Inovação" />
          <MenuButton name="Audax" />
        </Toolbar>
      </AppBar>


      <Box className='BoxMainImage' sx={{ width: '95%' }}>
        <img src={banner}></img>
      </Box>

      <Box className='BigIconTitle'>
        <Box >
          <Typography variant="h5" sx={{ fontWeight: 'bold' }} className='FonteSuperBold'> Não projetamos apenas lentes oftálmicas,</Typography>
          <Typography variant="h5" sx={{ marginTop: -0.7, fontWeight: 'bold' }}> projetamos experiências visuais incomparáveis.</Typography>
        </Box>
        <Box className="IconsTitle">
          <IconsTitle name="Inovação" image="n" />
          <IconsTitle name="Tecnologia" image="n" />
          <IconsTitle name="Precisão" image="n" />
        </Box>
      </Box>

      <Box sx={{ marginTop: 1, backgroundColor: '#d3d3d3', padding: 4, display: "flex", flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3.3 }}>
        <CardsImage title="Seus olhos merecem o melhor" title2="Saiba mais sobre sua visão"
          image={card1} />
        <CardsImage title="Qualidade Superior" title2="Saiba mais sobre nossas lentes"
          image={card2} />
        <CardsImage title="Olhe para o futuro" title2="Saiba mais sobre nossas tecnologias"
          image={card3} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2, marginLeft: 1.5 }}>
        <Box sx={{ img: { width: '33vw' } }}>
          <img src={cardGlobo}></img>
        </Box>
        <Box sx={{ marginTop: 2.4, marginLeft: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Tecnologia e Inovação
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '1.2rem', padding: 1 }} >
            Por trás de cada lente AUDAX exite um longo caminho que você não você.<br />
            Conheca um pouco da tecnologia da ultima geração utilizada<br />
            nas lentes AUDAX.
          </Typography>
          <Box sx={{ height: "100%", display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button variant='contained' sx={{ height: 2.2, width: 'auto', padding: 2, borderRadius: 5 }}>Saiba mais</Button>
          </Box>
        </Box>

      </Box>
      <Box sx={{ img: { width: '100%', backgroundColor: 'black' } }}>
        <img src={cardWindow}></img>
      </Box>
    </Box >
  );
}

