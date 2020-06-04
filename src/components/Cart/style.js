import styled from "styled-components";

const ContainerCart = styled.div`
  position: fixed;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  width: 100%;
  min-height: 50px;
  max-width: 414px;
  display: ${props => props.show ? "block" : "none"};
`;

const WrapperCart = styled.div`
  margin: 0 auto;
`;

const CartContent = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding: 8px 8px 8px 8px;
  justify-content: space-between;
  background-color: #a23530;
  color: #ffffff;
  border-radius: 4px;
`;

const DetailCart = styled.div`
  display: grid;
`;

const DetailTop = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const DetailBottom = styled.div`
  font-size: 8px;
  font-weight: 500;
`;

const DetailIconCart = styled.div`
    font-size: 14px;
    display: flex;
`

const IconCart = styled.span`
    margin-left: 8px;
`;

export {
  ContainerCart,
  WrapperCart,
  CartContent,
  DetailCart,
  DetailTop,
  DetailBottom,
  DetailIconCart,
  IconCart,
};
