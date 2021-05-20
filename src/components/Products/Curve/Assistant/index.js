import React from "react";
import image from "../../../../images/Products/laptop.svg";
import "./style.scss";

const Assistant = () => {
  return (
    <div className="assistant">
      <div className="container">
        <div className="assistant-container">
          <div className="assistant-heading">
            <h3>An essential study assistant</h3>
          </div>

          <div className="assistant-content">
            <div className="assistant-text">
              <h6 className="text1">
                Vastly improve in-class comprehension with a tool to support
                students learning new content.
              </h6>
              <h6 className="text2">
                Students enter a new topic into the platform and can fill any
                gaps in pre-requsite understanding prior to class.
              </h6>
            </div>
            <div className="assistant-image">
              <img className="assistant-img" src={image} alt="laptop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
