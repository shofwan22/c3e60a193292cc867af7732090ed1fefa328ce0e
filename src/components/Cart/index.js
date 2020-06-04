import React, { useState, useEffect } from 'react';
import {
  ContainerCart,
  WrapperCart,
  CartContent,
  DetailCart,
  DetailTop,
  DetailBottom,
  DetailIconCart,
  IconCart,
} from "./style";

const Cart = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      if(props.showCart === true) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, [props.showCart, show])
    return (
      <ContainerCart show={show}>
        <WrapperCart>
          <CartContent>
            <DetailCart>
              <DetailTop>5 Items | Rp 125,000</DetailTop>
              <DetailBottom>Termasuk ongkos kirim</DetailBottom>
            </DetailCart>
            <DetailIconCart>
              <IconCart className="material-icons">shopping_cart</IconCart>
              <IconCart className="material-icons">
                keyboard_arrow_right
              </IconCart>
            </DetailIconCart>
          </CartContent>
        </WrapperCart>
      </ContainerCart>
    );
}

export default Cart;