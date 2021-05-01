import React from "react";
import {
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
} from "./NewsCardCom";

export default function NewsCard({ article, i, activeArticle }) {
  const {
    author,
    content,
    description,
    publishedAt,
    title,
    urlToImage,
    url,
    source,
  } = article;

  //formted the text so that it doesn't go too long
  const formattext = (des, num) => {
    const strArr = des.split(" ");
    if (strArr.length >= num) {
      strArr.length = num;
      let formatedDes = strArr.join(" ");
      return formatedDes + "...";
    }
    return des;
  };

  return (
    //prettier-ignore
    <Card key={i} ifActive= {activeArticle === i ? true : false} >
      <CardImage>
        <Image src={urlToImage} />
      </CardImage>

      <CardContentContainer>
        <CardTopSection>
          <DateStr>{new Date(publishedAt).toLocaleDateString()}</DateStr>
          <Author>{source.name}</Author>
        </CardTopSection>

        <CardHeader>{title && formattext(title, 8)}</CardHeader>

        <CardDes>{description && formattext(description, 18)}</CardDes>

        <CardBottomSection>
          <LearnMore href={url} target="_blank" >Learn more</LearnMore>
          <CardNumber>{i + 1}</CardNumber>
        </CardBottomSection>
      </CardContentContainer>
    </Card>
  );
}
