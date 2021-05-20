import React from "react";
import image from "../../../../images/Products/laptop.svg";
import "./style.scss";

const Report = () => {
  return (
    <div className="report">
      <div className="container">
        <div className="report-container">
          <div className="report-heading">
            <h3>
              A <span className="image-span">comprehensive</span> performance
              report
            </h3>
          </div>

          <div className="report-content">
            <div className="report-text">
              <h6 className="text1">
                Recieve granular performance data across year levels, topics and
                skills.
              </h6>
              <h6 className="text2">
                Progressive updating as new skills are learnt using the Learning
                Roadmap & Study Assistant.
              </h6>
            </div>
            <div className="report-image">
              <img className="report-img" src={image} alt="laptop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
