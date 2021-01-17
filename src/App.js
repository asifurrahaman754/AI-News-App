import React, { useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanBtnInstance = useRef(null);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          "1a0753cdf273edcb1a296acc6896c8ab2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "test") {
            alert("yes bro alan is wake");
          }
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <h1>hello app </h1>
    </div>
  );
}

export default App;
