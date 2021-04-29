import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/News Cards";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key:
        "1a0753cdf273edcb1a296acc6896c8ab2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, savedArticles }) => {
        if (command === "newHeadlines") {
          setArticles(savedArticles);
          articles && console.log("here are the articles", articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>testing voice command 3</h1>
      <NewsCards articles={articles} />
    </div>
  );
}

export default App;
