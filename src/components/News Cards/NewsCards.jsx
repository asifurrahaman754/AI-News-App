import React from "react";
import NewsCard from "../News Card/NewsCard";

export default function NewsCards({ articles }) {
  return (
    <div>
      {articles.map((article, i) => {
        return <NewsCard />;
      })}
    </div>
  );
}
