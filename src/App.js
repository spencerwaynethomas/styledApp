import React, { useState, } from 'react';
import axios from "axios"
import { Header, Button, Segment, Card, Icon, } from 'semantic-ui-react';
import styled from 'styled-components';
import HeaderText from "./styles/HeaderText"

const App = () => (
  <AppContainer>
    <HeaderText fSize="large">My Portfolio</HeaderText>
    <Segment as={Transparent}>
      <HeaderText fSize="small" >My Projects</HeaderText>
    </Segment>
    <Segment as={Transparent}>
      <HeaderText>Contact</HeaderText>
    </Segment>
  </AppContainer>
);







const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`;

const Transparent = styled.div`
  background: transparent !important;
`;



export default App;
