import React from 'react'
import image from "../../../../images/Working/curve/program.svg"
import dotted from "../../../../images/Working/curve/dotted.svg"
import oval from "../../../../images/Working/curve/oval.svg"

import "./style.scss"

const Program = () => {
    return (
        <div className="work-program">
            <div className="container">
                <div className="dotted">
                <img  src={dotted} alt=""/>
               
                </div>
                <div className="oval"> <img  src={oval} alt=""/></div>
               
               
                <div className="work-program-container">
                <div className="work-program-content">
                        <div className="content-bold">
                        <span >You receive a comprehensive report on program</span>
                        </div>
                      <div className="content-text">
                        <span >A detailed account on program across all required mathematical skills. This report will include detailed analytics on understanding.</span>
                    </div>
                    </div>
               
                    <div className="work-program-image">
                        <img src={image} alt="program" />
                    </div>
                   
                  
                </div>
            </div>
            
        </div>
    )
}

export default Program
