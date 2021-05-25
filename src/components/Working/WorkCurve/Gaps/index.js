import React from 'react'
import image from "../../../../images/Working/curve/gaps.svg"
import dotted from "../../../../images/Working/curve/dotted.svg"
import oval from "../../../../images/Working/curve/oval.svg"

import "./style.scss"

const Gaps = () => {
    return (
        <div className="work-gaps">
            <div className="container">
                <div className="dotted">
                <img  src={dotted} alt=""/>
               
                </div>
                <div className="oval"> <img  src={oval} alt=""/></div>
               
               
                <div className="work-gaps-container">
               
                    <div className="work-gaps-image">
                        <img src={image} alt="gaps" />
                    </div>
                   
                    <div className="work-gaps-content">
                        <div className="content-bold">
                        <span >Students will often work alongside a tutor to fill any gaps</span>
                        </div>
                      <div className="content-text">
                        <span >Based on the results, we can recommend the most suitable tutor from our high-quality partner organisations.</span>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Gaps
