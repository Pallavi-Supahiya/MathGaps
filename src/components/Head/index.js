import React from "react";
import Image1 from "../../images/Products/Head/image1.svg";
import Image2 from "../../images/Products/Head/image2.svg";
import "./style.scss";

const Head = ({data}) => {
  return (
    <div className="all">
      <div className="all-head">
        <div className="container">
          <div className="all-heading">
            <h1>{data}</h1>
          </div>
          <div className="all-images">
            <img className="image1" src={Image1} alt="math"></img>
            <img className="image2" src={Image1} alt="math"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
