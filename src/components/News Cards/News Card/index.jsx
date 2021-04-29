import React from "react";
import {
  Card,
  CardImage,
  CardContentContainer,
  CardTopSection,
  DateStr,
  Author,
  CardHeader,
  CardDes,
  CardBottomSection,
  LearnMore,
  CardNumber,
} from "./NewsCardCom";

export default function NewsCard({ article, i }) {
  const {
    author,
    content,
    description,
    publishedAt,
    title,
    urlToImage,
    url,
  } = article;

  const formatDes = des => {
    const strArr = des.split(" ");
    if (strArr.length >= 25) {
      strArr.length = 25;
      let formatedDes = strArr.join(" ");
      return formatedDes + "...";
    }

    return des;
  };

  return (
    //prettier-ignore
    <Card key={i}>
      <CardImage src={urlToImage} />
      <CardContentContainer>
        <CardTopSection>
          <DateStr>{new Date(publishedAt).toLocaleDateString()}</DateStr>
          <Author>BBC</Author>
        </CardTopSection>
        <CardHeader>{title}</CardHeader>
        <CardDes>{formatDes(description)}</CardDes>
        <CardBottomSection>
          <LearnMore href={url} target="_blank" >Learn more</LearnMore>
          <CardNumber>{i + 1}</CardNumber>
        </CardBottomSection>
      </CardContentContainer>
    </Card>
  );
}
