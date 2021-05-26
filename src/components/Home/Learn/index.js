import React from "react";
import Image from "../../../images/Home/Learn/Image.svg";
import { Button } from "../../Button";

import { graphql, useStaticQuery } from "gatsby";
import {Link} from "gatsby"
import dots from "../../../images/dots.png"
import "./style.scss";

const query = graphql`
  {
    allContentfulMathgaps {
      nodes {
        childContentfulMathgapsLearnTextNode {
          id
          learn
        }
      }
    }
  }
`;

const Learn = () => {
  const data = useStaticQuery(query);
  const learndata = data.allContentfulMathgaps.nodes[0];
  const learncontent = learndata.childContentfulMathgapsLearnTextNode.learn;
  return (
    <div className="learn">
      <div className="container">
      <img className="dots-up" src={dots} alt="..." />
        <img className="dots-down" src={dots} alt="..." />
        <div className="learn-container">
          <div className="learn-content">
            <h2>{learncontent}</h2>
           <Link to="/products"><Button big="true">MathGaps Products ></Button></Link> 
          </div>
          <div className="learn-image">
            <img src={Image} alt="image " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
