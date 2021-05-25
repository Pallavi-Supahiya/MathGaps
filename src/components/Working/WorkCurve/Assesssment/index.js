import React from 'react'
import image from "../../../../images/Working/curve/assessment.svg"
import dotted from "../../../../images/Working/curve/dotted.svg"
import oval from "../../../../images/Working/curve/oval.svg"

import "./style.scss"

const Assessment = () => {
    return (
        <div className="work-assessment">
            <div className="container">
                <div className="dotted">
                <img  src={dotted} alt=""/>
               
                </div>
                <div className="oval"> <img  src={oval} alt=""/></div>
               
               
                <div className="work-assessment-container">
               
                    <div className="work-assessment-image">
                        <img src={image} alt="assessment" />
                    </div>
                   
                    <div className="work-assessment-content">
                        <div className="content-bold">
                        <span >Your student takes a free diagnostic assessment</span>
                        </div>
                      <div className="content-text">
                        <span >Students complete the test on the MathGaps platform in less than an hour.</span>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Assessment
