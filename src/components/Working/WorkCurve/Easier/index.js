import React from 'react'
import image from "../../../../images/Working/curve/easier.svg"
import dotted from "../../../../images/Working/curve/dotted.svg"
import oval from "../../../../images/Working/curve/oval.svg"

import "./style.scss"

const Easier = () => {
    return (
        <div className="work-easier">
            <div className="container">
                <div className="dotted">
                <img  src={dotted} alt=""/>
               
                </div>
                <div className="oval"> <img  src={oval} alt=""/></div>
               
               
                <div className="work-easier-container">
                <div className="work-easier-content">
                        <div className="content-bold">
                        <span >You receive a comprehensive report on easier</span>
                        </div>
                      <div className="content-text">
                        <span >A detailed account on easier across all required mathematical skills. This report will include detailed analytics on understanding.</span>
                    </div>
                    </div>
               
                    <div className="work-easier-image">
                        <img src={image} alt="easier" />
                    </div>
                   
                  
                </div>
            </div>
            
        </div>
    )
}

export default Easier
