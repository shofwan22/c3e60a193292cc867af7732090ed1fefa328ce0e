import styled from "styled-components";

const ContainerCard = styled.div`
  width: 100%;
  border: 1px solid #f1f1f2;
  border-radius: 8px;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  margin-bottom: 16px;
`;

const ImageCard = styled.img`
    width: 100%;
    height: 250px;
`;

const BodyCard = styled.div`
  padding: 8px 16px 8px 16px;
`;

const Rating = styled.div`
  color: #6e7679;
  font-size: 14px;
  font-weight: 600;
  display: flex;
`;

const RatingText = styled.div`
    margin-right: 8px;
`;

const RatingIcon = styled.span`
  color: #f9423a;
  font-size: 16px;
`;

const MainText = styled.div`
  margin-bottom: 16px;
`;

const TitleCard = styled.h3`
    color: #424749;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
`;

const SubtitleCard = styled.div`
  color: #6e7679;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #424749;
`;

const AddButton = styled.button`
  font-size: 14px;
  color: #fff;
  background: #f9423a;
  text-transform: uppercase;
  padding: 8px 24px 8px 24px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddIcon = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-left: 4px;
`;




export {
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
}; 