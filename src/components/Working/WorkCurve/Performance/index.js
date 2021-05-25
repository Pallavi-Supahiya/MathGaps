import React from 'react'
import image from "../../../../images/Working/curve/performance.svg"
import dotted from "../../../../images/Working/curve/dotted.svg"
import oval from "../../../../images/Working/curve/oval.svg"

import "./style.scss"

const Performance = () => {
    return (
        <div className="work-performance">
            <div className="container">
                <div className="dotted">
                <img  src={dotted} alt=""/>
               
                </div>
                <div className="oval"> <img  src={oval} alt=""/></div>
               
               
                <div className="work-performance-container">
               
                    <div className="work-performance-image">
                        <img src={image} alt="performance" />
                    </div>
                   
                    <div className="work-performance-content">
                        <div className="content-bold">
                        <span >You receive a comprehensive report on performance</span>
                        </div>
                      <div className="content-text">
                        <span >A detailed account on performance across all required mathematical skills. This report will include detailed analytics on understanding.</span>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Performance
