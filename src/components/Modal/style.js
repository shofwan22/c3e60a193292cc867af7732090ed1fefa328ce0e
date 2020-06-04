import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    display: ${props => props.show ? "block" : "none"};
`;

const WrapModal = styled.div`
  width: 100%;
  max-width: 414px;
  margin: auto;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 100vh;
`;

const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconClose = styled.span`
  font-size: 20px;
  cursor: pointer;
  color: #424749;
`;

const ModalHeader = styled.div`
  color: #424749;
  font-size: 20px;
  margin: 24px 0 24px 0;
  font-weight: 600;
  line-height: 1.5;
  width: 280px;
`;

const BoxInput = styled.div`
  border: 1px solid #f1f1f2;
  border-radius: 4px;
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  padding: 4px 8px 4px 8px;
`;

const IconInput = styled.span`
  font-size: 12px;
  color: #f9423a;
  padding: 4px 4px 4px 4px;
`;

const InputForm = styled.input`
  font-size: 12px;
  color: #f9423a;
  border: none;
  outline: none;
  color: #424749;
  margin-left: 8px;
`;

const BoxResult = styled.div`
  margin-top: 8px;
  padding: 4px 8px 4px 8px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ResultText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const IconResult = styled.span`
  font-size: 14px;
  color: #6e7679;
  padding: 4px 4px 4px 4px;
  background-color: #e2e4e4;
  border-radius: 100%;
`;

const TextResult = styled.div`
  display: grid;
  align-items: center;
  border-bottom: 1px solid #f1f1f2;
  padding: 8px 0 8px 4px;
  margin-left: 8px;
  width: 100%;
`;

const TextResultTop = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #424749;
`;

const TextResultBottom = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #6e7679;
`;







export {
  ModalContainer,
  WrapModal,
  ModalContent,
  ButtonClose,
  IconClose,
  ModalHeader,
  BoxInput,
  IconInput,
  InputForm,
  BoxResult,
  ResultText,
  IconResult,
  TextResult,
  TextResultTop,
  TextResultBottom,
};