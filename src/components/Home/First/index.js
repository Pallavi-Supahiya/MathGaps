import React from "react";
import Image from "../../../images/Home/First/img.svg";
import { Button } from "../../Button";
import { graphql, useStaticQuery } from "gatsby";
import "./style.scss";

const query = graphql`
  {
    allContentfulMathgaps {
      nodes {
        first {
          id
          first
        }
      }
    }
  }
`;
const First = () => {
  const data = useStaticQuery(query);
  const firstdata = data.allContentfulMathgaps.nodes[0];
  console.log(firstdata);
  const firstcontent = firstdata.first;
  return (
    <div className="outer-first">
    <div className="first">
      <div className="container">
        <div className="first-container">
          <div className="first-content">
            <h2>{firstcontent.first}</h2>
            <Button big="true">Register Your Interest</Button>
          </div>
          <div className="first-image">
            <img src={Image} alt="image " />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default First;
