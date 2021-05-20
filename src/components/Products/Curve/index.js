import React from 'react'
import curv from "../../../images/Products/curve.svg"
import Help from "./Help"
import Algorithm from "./Algorithm"
import Report from "./Report"
import Program from "./Program"
import Assistant from "./Assistant"
import "./style.scss"

const Curve = () => {
    return (
        <div className="curve">
           <div className="curve-div">
             <img  className="curve-image" src={curv} alt="curve"/> 
             </div>
            <Algorithm/>
            <Report />
            <Program />
            <Assistant/>
          
        </div>
    )
}

export default Curve
