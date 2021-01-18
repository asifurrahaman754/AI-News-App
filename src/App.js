import React, { useEffect, useRef, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/News Cards/NewsCards";

function App() {
  const alanBtnInstance = useRef(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          "1a0753cdf273edcb1a296acc6896c8ab2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData, articles) => {
          if (commandData.command === "newHeadlines") {
            setNews(articles);
          }
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <h1>testing voice command 2</h1>
      <NewsCards articles={news} />
    </div>
  );
}

export default App;
