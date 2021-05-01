import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/News Cards";
import svg from "../src/asset/logo.svg";
import wordsToNumbers from "words-to-numbers";
import Instruction from "./components/Instruction";

function App() {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);

  //prettier-ignore
  useEffect(() => {
    alanBtn({
      key:
        "1a0753cdf273edcb1a296acc6896c8ab2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, savedArticles, number, newArticles}) => {
        if (command === "newHeadlines") {
          setArticles(savedArticles);
          setactiveArticle(-1);
        } else if (command === "highlight") {
          setactiveArticle(activeArticle => activeArticle + 1);
        } else if (command === "open") {
           //if the user gives a text instead a number to open the article then convert it to number
           let parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
           let article = newArticles[parsedNumber - 1];
            
           //some validation for the user falsy instruction
           if (parsedNumber > newArticles.length) {
             alanBtn().playText("i can't find it.please try again");
           } else if (article) {
              window.open(article.url, '_blank');
             alanBtn().playText('Opening...');
           } else {
             alanBtn().playText('Please try that again...');
           }
        }

      },
    });
  }, []);

  return (
    <div className="App">
      {/* show the instructon after the article rendered*/}
      {!articles.length || <Instruction />}
      {!articles.length && (
        <div className="logo">
          <img src={svg} />
        </div>
      )}
      <NewsCards articles={articles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
