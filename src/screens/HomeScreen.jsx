import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import BodyCard from '../components/bodyCard';
import BodyCarousel from '../components/homeCarausal';

import todayDeal from '../assets/images/todayDeal.PNG';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <div style={{display: 'flex'}}>
          <div style={{padding: '10px', width: '70%'}}>
            <BodyCarousel />
          </div>
          <div style={{paddingTop: '30px'}}>
            <img src={todayDeal} alt='offer details' />
          </div>
        </div>

        <div style={{marginTop: '10px', display:'flex'}}>
          <BodyCard style={{border: '2px solid black', marginLeft:'10px'}}/>
          <BodyCard style={{border: '2px solid black', marginLeft:'10px'}}/>
          <BodyCard style={{border: '2px solid black', marginLeft:'10px'}}/>
          <BodyCard style={{border: '2px solid black', marginLeft:'10px'}}/>
        </div>
      </Container>
    </React.Fragment>
  );
}