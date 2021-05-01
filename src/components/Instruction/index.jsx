import React, { useEffect } from "react";
import "../../index.css";

export default function Instruction() {
  //go to top of the page as soon as this component renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="article-instruction-container">
        <div>
          <h4>to go back say</h4>
          <p>"Go back"</p>
        </div>
        <div>
          <h4>to open an article say</h4>
          <p>"open article [number]"</p>
        </div>
      </div>
    </>
  );
}
