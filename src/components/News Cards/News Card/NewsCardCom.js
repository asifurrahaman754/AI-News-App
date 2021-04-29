import styled from "styled-components";

const Card = styled.article`
  box-shadow: 2px 4px 5px #c8c8c8;
  background: white;
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
`;

const Image = styled.img`
  max-width: 100%;
  height: inherit;
  object-fit: cover;
  object-position: bottom;
  width: 100%;
`;

const CardContentContainer = styled.div`
  padding: 10px 10px 20px 10px;
  display: grid;
  height: 280px;
`;

const CardTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #777;
`;

const CardBottomSection = styled(CardTopSection)`
  align-self: end;
  font-size: 1rem;
  text-transform: uppercase;
`;

const DateStr = styled.span``;

const Author = styled(DateStr)``;

const CardHeader = styled.h3`
  font-size: 1.5rem;
`;

const CardDes = styled.p``;

const LearnMore = styled.a`
  color: #5d03b7;
  text-decoration: none;
`;

const CardNumber = styled.span``;

export {
  Card,
  CardImage,
  Image,
  CardContentContainer,
  CardTopSection,
  DateStr,
  Author,
  CardHeader,
  CardDes,
  CardBottomSection,
  LearnMore,
  CardNumber,
};
