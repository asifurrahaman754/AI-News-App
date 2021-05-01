import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/News Cards";
import svg from "../src/asset/logo.svg";
import backSvg from "../src/asset/back.svg";
import wordsToNumbers from "words-to-numbers";

function App() {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);

  //prettier-ignore
  useEffect(() => {
    alanBtn({
      key:
        "1a0753cdf273edcb1a296acc6896c8ab2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, savedArticles, num }) => {
        if (command === "newHeadlines") {
          setArticles(savedArticles);
          setactiveArticle(-1);
        } else if (command === "highlight") {
          setactiveArticle(activeArticle => activeArticle + 1);

        } else if (command === "open") {
           //if the user gives a text then convert it to number
           let parsedNumber = num.length > 2 ? wordsToNumbers(num, { fuzzy: true }) : num;
           let article = articles[parsedNumber - 1];

           if (parsedNumber > articles.length) {
             alanBtn().playText(`i can't find it.please try again`);
           } else if (article) {
             console.log(parsedNumber);
             window.open(article.url, '_blank');
             alanBtn().playText('Opening...');
           } else {
             alanBtn().playText('Please try that again...');
           }
        }

      },
    });
  }, [articles]);

  return (
    <div className="App">
      {!articles.length || (
        <div className="back" onClick={() => setArticles([])}>
          <img src={backSvg} />
        </div>
      )}
      <div className="logo">
        <img src={svg} />
      </div>
      <NewsCards articles={articles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
