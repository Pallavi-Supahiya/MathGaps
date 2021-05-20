import React from "react";
import line from "../../../images/Home/Tools/line.svg";
import image1 from "../../../images/Home/Tools/Data.svg";
import image2 from "../../../images/Home/Tools/Calendar.svg";
import image3 from "../../../images/Home/Tools/Customer.svg";
import number from "../../../images/Home/Tools/1.svg";
import Bg from "../../../images/Home/Tools/Rectangle.svg";
import { Button } from "../../Button";

import "./style.scss";

const Tools = () => {
  let data = [
    {
      img: image1,
      image: number,
      heading: "Diagnostic Test & Report",
      content:
        "Rapidly assess knowledge of every maths skill taught in past year levels",
    },
    {
      img: image2,
      image: number,
      heading: "Learning Roadmap",
      content:
        "Recieve a personalised learning program to fill any gaps that have formed ",
    },
    {
      img: image3,
      image: number,
      heading: "Study Assistant",
      content:
        "Guiding study using information on current understanding, making new learning easy",
    },
  ];

  return (
    <div className="tools">
      <div className="container">
        <div className="tools-container">
          <div className="tools-Heading">
            <div className="tools-Heading-content">
              <h3>Why MathGaps is right for you.</h3>
              <div className="tools-Heading-Image">
                <img src={line} alt="line"></img>
              </div>
            </div>
          </div>
          <div className="tools-Cards">
            {data.map((element, index) => {
              return (
                <div className="tools-card">
                  <div className="tools-card-image">
                    <div className="tools-card-image-bg">
                      <img className="tools-card-icon" src={element.img}></img>
                    </div>
                    <div className="tools-card-data">
                      <img
                        className="tools-card-number"
                        src={element.image}
                      ></img>
                      <div className="tools-card-heading">
                        <span>{element.heading}</span>
                      </div>
                      <span className="tools-card-content">
                        {element.content}
                      </span>
                      <div className="tools-button">
                        <Button className="tools-btn">More Info </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
