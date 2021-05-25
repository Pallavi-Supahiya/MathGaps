import React from "react";
import Image from "../../../images/Faqs/imageblock.svg";
import { Button } from "../../Button";


import dots from "../../../images/dots.png"
import "./style.scss";



const Question = () => {
  
  return (
    <div className="question">
      <div className="container">
      <img className="dots-up" src={dots} alt="..." />
        <img className="dots-down" src={dots} alt="..." />
        <div className="question-container">
          <div className="question-content">
            <h2>Still have unanswered questions? Get in touch with us today...</h2>
            <Button big="true">Get In Touch ></Button>
          </div>
          <div className="question-image">
            <img src={Image} alt="image " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
