import React from 'react'
import image from "../../../../images/Working/curve/lie.svg"
import dotted from "../../../../images/Working/curve/dotted.svg"
import oval from "../../../../images/Working/curve/oval.svg"

import "./style.scss"

const Lie = () => {
    return (
        <div className="work-lie">
            <div className="container">
                <div className="dotted">
                <img  src={dotted} alt=""/>
               
                </div>
                <div className="oval"> <img  src={oval} alt=""/></div>
               
               
                <div className="work-lie-container">
                <div className="work-lie-content">
                        <div className="content-bold">
                        <span >You receive a comprehensive report on lie</span>
                        </div>
                      <div className="content-text">
                        <span >A detailed account on lie across all required mathematical skills. This report will include detailed analytics on understanding.</span>
                    </div>
                    </div>
               
                    <div className="work-lie-image">
                        <img src={image} alt="lie" />
                    </div>
                   
                  
                </div>
            </div>
            
        </div>
    )
}

export default Lie
