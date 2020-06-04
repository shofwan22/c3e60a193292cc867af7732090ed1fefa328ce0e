import React from 'react';
import {
  ContainerCard,
  ImageCard,
  BodyCard,
  Rating,
  RatingText,
  RatingIcon,
  MainText,
  TitleCard,
  SubtitleCard,
  CardBottom,
  Price,
  AddButton,
  AddIcon,
} from "./style";

const Card = (props) => {
    const handleAdd = () => {
      props.addCart(true);
    }
    return (
      <ContainerCard>
        <ImageCard src={props.image}></ImageCard>
        <BodyCard>
          <Rating>
            <RatingText>{props.rating}</RatingText>
            <RatingIcon className="material-icons">star</RatingIcon>
            <RatingIcon className="material-icons">star</RatingIcon>
            <RatingIcon className="material-icons">star</RatingIcon>
            <RatingIcon className="material-icons">star</RatingIcon>
            <RatingIcon className="material-icons">star_half</RatingIcon>
          </Rating>
          <MainText>
            <TitleCard>{props.title}</TitleCard>
            <SubtitleCard>{props.subtitle}</SubtitleCard>
          </MainText>
          <CardBottom>
            <Price>{props.price}</Price>
            <AddButton onClick={handleAdd}>
              {props.btn}{" "}
              <AddIcon className="material-icons">{props.btn}</AddIcon>
            </AddButton>
          </CardBottom>
        </BodyCard>
      </ContainerCard>
    );
}

export default Card;