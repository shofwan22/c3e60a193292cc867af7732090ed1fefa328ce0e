import React, { Component } from 'react';
import Container from './Container';
import Header from '../../components/Header';
import Body from '../Body';

class App extends Component {
    render() {
        return (
          <Container>
            <Header />
            <Body />
          </Container>
        );
    }
}

export default App;