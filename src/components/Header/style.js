import styled from "styled-components";

const ContainerHeader = styled.header`
    position: fixed;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
    min-height: 50px;
    width: 100%;
    color: #424749;
    max-width: 414px;
`;

const WrapperHeader = styled.div`
  max-width: 414px;
  margin: 0 auto;
`;

const HeaderTop = styled.div`
  display: flex;
  margin-bottom: 8px;
  padding: 8px 8px 0px 8px;
`;

const BackButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 32px;
    margin-right: 14px;
`;

const HeaderText = styled.div`
    display: grid;
`;

const TextTop = styled.div`
    font-size: 8px;
    font-weight: 500;
    color: #6e7679;
    text-transform: uppercase;
`;

const TextBottom = styled.div`
    font-size: 16px;
    color: #6e7679;
    font-weight: 600;
    display: flex;
`;

const TextPlace = styled.div`
    margin-top: 4px;
`;

const ExpandIcon = styled.div`
    color: #f9423a;
`;

const HeaderMiddle = styled.div`
  padding: 4px 16px 4px 16px;
  display: flex;
  order: 7;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f2;
`;

const Calendar = styled.div`
  padding: 8px 0px 8px 0px;
  text-align: center;
  display: grid;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }

  background-color: ${props => props.active && "#424749"};
  color: ${props => props.active && "#fff"};
  width: ${props => props.active && "40px"};
  border-radius: ${props => props.active && "100%"};
`;

const Day = styled.div`
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const HeaderBottom = styled.div`
  padding: 8px 16px 8px 16px;
  display: flex;
`;

const TypeTime = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 12px
  font-weight: 600;
  width: 100%;
  padding: 8px 16px 8px 16px;
  outline: none;
  background-color: ${(props) => props.active ? "#424749" : "#fff"};
  color: ${(props) => (props.active ? "#fff" : "#e2e4e4")};
  border: ${(props) => (props.active ? "none" : "1px solid #f1f1f2")};

  &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
  }

  &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
  }
`;


export {
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
};
