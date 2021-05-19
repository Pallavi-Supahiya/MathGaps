import React from 'react'
import Image from "../../../images/Home/Increase/img.svg"
import {Button} from "../../Button"
import {graphql, useStaticQuery} from "gatsby"
import "./style.scss"

const query = graphql`
{
  allContentfulMathgaps {
    nodes {
      increase {
        id
        increase
      }
    }
  }
}
` 

const Increase = () => {

       const data=useStaticQuery(query);
const increasedata=data.allContentfulMathgaps.nodes[0];
console.log(increasedata)
 const increasecontent=increasedata.increase;
    return (
  


                <div className="increase">
                     <div className="container">
                    <div className="increase-container">
                        
                        <div className="increase-image">
                            <img src={Image} alt="image "/>
                        </div>
                        <div className="increase-content">
        <h2>{increasecontent.increase}</h2>
        <Button big="true">How MathGaps Works</Button>
                        </div>
                    </div>
                   </div> 
                </div>
            )
        }
export default Increase
