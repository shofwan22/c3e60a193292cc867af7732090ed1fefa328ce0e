import React, { useState, useEffect } from "react";
import {
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
} from "./style";

const Result = [
  {
    title: "Kulina",
    subtitle: "Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...",
  },
  {
    title: "Pancoran Riverside Appartment",
    subtitle: "RT.6/RW.1, Pengadegan, Pancoran, South Jakart...",
  },
  {
    title: "Jalan Tulodong Atas 28",
    subtitle: "Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...",
  },
  {
    title: "Block71 Jakarta",
    subtitle: "Ariobimo Sentral, South Jakarta, RT.9/RW.4, Eas...",
  },
];

const Modal = (props) => {
    const [show, setShow] = useState(false);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
      if (props.showModal === true) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, [props.showModal, show]);

    const handleClose = (e) => {
        if (e.target.id === "modal" || e.target.id === "btnClose") {
          setShow(false);
          props.closeHandle(false);
        }
    }

    const handleInput = (e) => {
        var res = e.target.value.length;
        if(res >= 3) {
            setShowResult(true)
        }else{
            setShowResult(false);
        }
    }

    return (
      <ModalContainer show={show} id="modal" onClick={handleClose}>
        <WrapModal>
          <ModalContent>
            <ButtonClose>
              <IconClose
                className="material-icons"
                id="btnClose"
                onClick={handleClose}
              >
                close
              </IconClose>
            </ButtonClose>
            <ModalHeader>Cek makanan yang tersedia di lokasi kamu!</ModalHeader>
            <BoxInput>
              <IconInput className="material-icons">location_on</IconInput>
              <InputForm type="text" onChange={handleInput}></InputForm>
            </BoxInput>
            <BoxResult show={showResult}>
              {Result.map((data, i) => {
                return (
                  <ResultText key={i}>
                    <IconResult className="material-icons">
                      location_on
                    </IconResult>
                    <TextResult>
                      <TextResultTop>{data.title}</TextResultTop>
                      <TextResultBottom>{data.subtitle}</TextResultBottom>
                    </TextResult>
                  </ResultText>
                );
              })}
            </BoxResult>
          </ModalContent>
        </WrapModal>
      </ModalContainer>
    );
}

export default Modal;