import React from "react";
import image from "../../../../images/Products/laptop.svg";
import "./style.scss";

const Program = () => {
  return (
    <div className="program">
      <div className="container">
        <div className="program-container">
          <div className="program-heading">
            <h3>
              A <span className="image-span">personalised</span> learning
              program
            </h3>
          </div>

          <div className="program-content">
            <div className="program-image">
              <img className="program-img" src={image} alt="laptop" />
            </div>
            <div className="program-box"> <div className="program-text">
              <h6 className="text1">
                Generated from test data to suit each individual learners needs.
              </h6>
              <h6 className="text2">
                Representing the optimal order in which students should fill all
                knowledge gaps.
              </h6>
            </div></div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
