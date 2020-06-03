import React, { useState } from 'react';
import {
  ContainerHeader,
  WrapperHeader,
  HeaderTop,
  BackButton,
  HeaderText,
  TextTop,
  TextBottom,
  ExpandIcon,
  TextPlace,
  HeaderMiddle,
  Calendar,
  Day,
  Date,
  HeaderBottom,
  TypeTime,
} from "./style";

const ListDay = [
  {
    day: "sen",
    date: "10",
    active: false,
  },
  {
    day: "sel",
    date: "11",
    active: false,
  },
  {
    day: "rab",
    date: "12",
    active: false,
  },
  {
    day: "kam",
    date: "13",
    active: true,
  },
  {
    day: "jum",
    date: "14",
    active: false,
  },
  {
    day: "sab",
    date: "15",
    active: false,
  },
  {
    day: "min",
    date: "16",
    active: false,
  },
];

const Header = () => {
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);

    const handleClick = (e) => {
        let value = e.target.value;
        if(value === 'lunch') {
            setLunch(true);
            setDinner(false);
        }else{
            setDinner(true);
            setLunch(false);
        }
    }


    return (
      <ContainerHeader>
        <WrapperHeader>
          <HeaderTop>
            <BackButton className="material-icons">
              keyboard_backspace
            </BackButton>
            <HeaderText>
              <TextTop>Alamat Pengantaran</TextTop>
              <TextBottom>
                <TextPlace>Tokopedia Tower</TextPlace>
                <ExpandIcon className="material-icons">expand_more</ExpandIcon>
              </TextBottom>
            </HeaderText>
          </HeaderTop>
          <HeaderMiddle>
            {ListDay.map((d, i) => {
              return (
                <Calendar key={i} active={d.active}>
                  <Day>{d.day}</Day>
                  <Date>{d.date}</Date>
                </Calendar>
              );
            })}
          </HeaderMiddle>
          <HeaderBottom>
            <TypeTime active={lunch} value="lunch" onClick={handleClick}>
              Lunch
            </TypeTime>
            <TypeTime active={dinner} value="dinner" onClick={handleClick}>
              Dinner
            </TypeTime>
          </HeaderBottom>
        </WrapperHeader>
      </ContainerHeader>
    );
}

export default Header;