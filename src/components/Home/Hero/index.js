import React from "react";
import "./style.scss";
import BG from "../../../images/Hero/full_background.svg";
import Formula from "../../../images/Hero/formula.svg";
import Girl from "../../../images/Hero/girl.svg";

import { graphql, useStaticQuery } from "gatsby";

import { Button } from "../../Button";

const query = graphql`
  {
    allContentfulMathgaps {
      nodes {
        childContentfulMathgapsTitleTextTextNode {
          id
          titleText
        }
      }
    }
  }
`;

const Heero = () => {
  const data = useStaticQuery(query);
  const data1 = data.allContentfulMathgaps.nodes[0];
  const data2 = data1.childContentfulMathgapsTitleTextTextNode.titleText;
  console.log(data2);
  return (
    <div className="Hero">
      <img className="Hero-Banner" src={BG} alt="bg" />
      <div className="container">
        <div className="Hero-Container">
          <div className="Hero-Content">
            <h1>A new tool to improve maths performance</h1>

            <p>{data2}</p>
            <Button primary="true" className="banner-button">Register your interest</Button>
          </div>
          <div className="Hero-Image">
            <img src={Formula} alt="formulas" />
            <div className="Hero-InnerImage">
              <img src={Girl} alt="girl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heero;
