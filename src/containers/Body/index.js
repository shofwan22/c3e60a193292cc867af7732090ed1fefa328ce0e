import React, { Component } from 'react';
import { BodyContainer, BodyDate } from "./style";
import Card from '../../components/Card';
import Lauk from '../../assets/images/lauk.webp';
import Menu from '../../assets/images/menu.webp';
import Ikan from '../../assets/images/ikan.webp';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              image: Lauk,
              rating: "4.5",
              title: "Roasted Chicken with Scrambled Egg",
              subtitle: "by Kulina . Uptown Lunch",
              price: "Rp 35, 0000",
              btn: "add",
            },
            {
              image: Menu,
              rating: "4.5",
              title: "Roasted Chicken with Scrambled Egg",
              subtitle: "by Kulina . Uptown Lunch",
              price: "Rp 35, 0000",
              btn: "add",
            },
            {
              image: Ikan,
              rating: "4.5",
              title: "Roasted Chicken with Scrambled Egg",
              subtitle: "by Kulina . Uptown Lunch",
              price: "Rp 35, 0000",
              btn: "add",
            },
          ],
        };
    }
    render() {
        return (
          <BodyContainer>
            <BodyDate>Kamis. 13 Maret 2019</BodyDate>
            {
                this.state.data.map((d,i) => {
                    return (
                      <Card
                        image={d.image}
                        rating={d.rating}
                        title={d.title}
                        subtitle={d.subtitle}
                        price={d.price}
                        btn={d.btn}
                      />
                    );
                })
            }
            
          </BodyContainer>
        );
    }
}

export default Body;