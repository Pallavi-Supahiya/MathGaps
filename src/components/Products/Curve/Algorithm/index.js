import React from "react";
import image from "../../../../images/Products/laptop.svg";
import dots from "../../../../images/dots.png";

import "./style.scss";

const Algorithm = () => {
  return (
    <div className="algorithm">
      <img className="dots-up" src={dots} alt="..." />
      <div className="container">
        <div className="algo-container">
          <div className="algo-heading">
            <h3>A powerful assessment algorithm</h3>
          </div>

          <div className="algo-content">
            <div className="algo-image">
              <img className="algo-img" src={image} alt="laptop" />
            </div>
            <div className="algo-box"> <div className="algo-text">
              <h6 className="text1">
                Diagnostic assessment across all required skills in under 60
                minutes.
              </h6>
              <h6 className="text2">
                Machine learning enabled to increase speed and accuracy.
              </h6>
              <h6 className="text3">
                Complete the assessment at your own pace. Pause and restart as
                you wish.
              </h6>
            </div></div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithm;
