import React from 'react';
import { Nav } from 'reactstrap';
import Header from '../Common/Header';
import Body from './Body';
import '../Common/Nav.css';

const Calendar = () => {
  return(
    <div>
      <Header/>
      <Nav/>
      <Body/>
    </div>
  )
}

export default Calendar;