import React, { useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanBtnInstance = useRef(null);
  let p = useRef(null);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          "1a0753cdf273edcb1a296acc6896c8ab2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData, articles) => {
          if (commandData.command === "newHeadlines") {
            p.current.textContent = JSON.stringify(articles);
          }
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <h1>testing voice command 2</h1>
      <p ref={p}></p>
    </div>
  );
}

export default App;
