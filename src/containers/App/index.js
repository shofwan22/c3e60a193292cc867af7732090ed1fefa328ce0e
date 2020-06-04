import React, { Component } from 'react';
import Container from './Container';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Body from '../Body';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        addCart: "",
      };

      this.toCart = this.toCart.bind(this);
    }
    
    toCart = (value) => {
      this.setState({
        addCart: value
      })
    }
    render() {
        return (
          <Container>
            <Header />
            <Body passHandleAdd={(value) => this.toCart(value)}/>
            <Cart showCart={this.state.addCart}/>
          </Container>
        );
    }
}

export default App;