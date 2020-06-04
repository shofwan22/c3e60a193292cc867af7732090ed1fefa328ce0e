import React, { Component } from 'react';
import Container from './Container';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Body from '../Body';
import Modal from '../../components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCart: "",
      modal: "",
    };

    this.toCart = this.toCart.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  toCart = (value) => {
    this.setState({
      addCart: value,
    });
  };

  showModal = (value) => {
    this.setState({
      modal: value,
    });
  };
  
  render() {
    return (
      <Container>
        <Header showModal={(value) => this.showModal(value)} />
        <Body passHandleAdd={(value) => this.toCart(value)} />
        <Cart showCart={this.state.addCart} />
        <Modal
          showModal={this.state.modal}
          closeHandle={(value) => this.showModal(value)}
        />
      </Container>
    );
  }
}

export default App;