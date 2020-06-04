import React, { useState, useEffect, useRef } from 'react';
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
    disable: false,
  },
  {
    day: "sel",
    date: "11",
    active: false,
    disable: false,
  },
  {
    day: "rab",
    date: "12",
    active: false,
    disable: false,
  },
  {
    day: "kam",
    date: "13",
    active: true,
    disable: false,
  },
  {
    day: "jum",
    date: "14",
    active: false,
    disable: false,
  },
  {
    day: "sab",
    date: "15",
    active: false,
    disable: true,
  },
  {
    day: "min",
    date: "16",
    active: false,
    disable: true,
  },
];

const Header = (props) => {
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);
    const prevScroll = useRef(0);
    const [scrollUp, setScrollUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (prevScroll.current < currentScroll && scrollUp) {
                setScrollUp(false);
            }
            if (prevScroll.current > currentScroll && !scrollUp) {
                setScrollUp(true);
            }
            if (currentScroll === 0) {
              setScrollUp(false);
            }

            prevScroll.current = currentScroll;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollUp]);

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

    const handleModal = () => {
      props.showModal(true);
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
              <TextBottom onClick={handleModal}>
                <TextPlace>Tokopedia Tower</TextPlace>
                <ExpandIcon className="material-icons">expand_more</ExpandIcon>
              </TextBottom>
            </HeaderText>
          </HeaderTop>
          <HeaderMiddle>
            {ListDay.map((d, i) => {
              return (
                <Calendar key={i} active={d.active} disable={d.disable}>
                  <Day>{d.day}</Day>
                  <Date>{d.date}</Date>
                </Calendar>
              );
            })}
          </HeaderMiddle>
          <HeaderBottom scrollTop={scrollUp}>
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