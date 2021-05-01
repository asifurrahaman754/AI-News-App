import React from "react";
import NewsCard from "./News Card";
import styled from "styled-components";
import Initial from "../Initial";

//prettier-ignore
const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest news about Technology' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Give me news about bitcoin' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const CartContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  margin: 0px auto;
  padding: 50px 20px;
`;

const InfoCardContainer = styled(CartContainer)`
  color: white;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default function NewsCards({ articles, activeArticle }) {
  //show the user about the all comands in the initial page load
  if (!articles.length) {
    return (
      <InfoCardContainer>
        {infoCards.map(infoCard => (
          <Initial infoCard={infoCard} />
        ))}
      </InfoCardContainer>
    );
  }

  return (
    <CartContainer>
      {articles.map((article, index) => (
        <NewsCard i={index} article={article} activeArticle={activeArticle} />
      ))}
    </CartContainer>
  );
}
