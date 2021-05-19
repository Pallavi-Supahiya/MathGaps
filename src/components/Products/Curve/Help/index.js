import React from 'react'
import image from "../../../../images/Products/Help/ring.svg"
import buttonbg from "../../../../images/Products/Help/buttonbg.svg"
import arrow from "../../../../images/Products/Help/arrow.svg"
import "./style.scss"







const Help = () => {


    let data = [
        {
          
          content1: "Assess whether your child has gaps in their ability.",
          content2: "The presence of gaps reduces confidence, restricts performance and makes new learning difficult.",
          
        },
        {
          
         
          content1:
            "Determine whether your child actually needs a tutor.",
          content2:
            "Once students fill their gaps, they may not require ongoing tutorals.",
    
        },
        {
          
         
          content1: "Improve the quality of ongoing tutorials.",
          content2: "Tutors will not need to dedicate time to diagnosis and past content, increasing the amount of new content learnt.",
        
        },
        {
         
          
          content1: "Enhance the level of classroom learning.",
          content2: "Once your child has built the pre-requisite understanding, classroom learning becomes significantly more effective.",
          
        },
      ]
    
    return (
        <div className="help">
            <div className="help-image">
                <img className="help-img" src={image} alt="ring" />
            </div>
            <div className="container">
                <div className="help-container">
                    <div className="help-heading">
                        <h3>How MathGaps can <span>help you</span></h3>
                    </div>
                    <div className="help-part2">
                    <div className="help-cards">
                  
                        <div className="help-card">
                            <div className="help-card-1">
                            <h5 className="help-card-content1"><span>Assess</span> whether your child has gaps in their ability.</h5>
                            </div>
                            <div className="help-card-2">
                            <h6 className="help-card-content2">The presence of gaps reduces confidence, restricts performance and makes new learning difficult.</h6>
                            </div>
                        </div>
                        <div className="help-card">
                            <div className="help-card-1">
                            <h5 className="help-card-content1"><span>Determine</span> whether your child actually needs a tutor.</h5>
                            </div>
                            <div className="help-card-2">
                            <h6 className="help-card-content2">Once students fill their gaps, they may not require ongoing tutorals.</h6>
                            </div>
                        </div>
                        <div className="help-card">
                            <div className="help-card-1">
                            <h5 className="help-card-content1"><span>Improve</span> the quality of ongoing tutorials.</h5>
                            </div>
                            <div className="help-card-2">
                            <h6 className="help-card-content2">Tutors will not need to dedicate time to diagnosis and past content, increasing the amount of new content learnt.</h6>
                            </div>
                        </div>
                        <div className="help-card">
                            <div className="help-card-1">
                            <h5 className="help-card-content1"><span>Enhance</span> the level of classroom learning.</h5>
                            </div>
                            <div className="help-card-2">
                            <h6 className="help-card-content2">Once your child has built the pre-requisite understanding, classroom learning becomes significantly more effective.</h6>
                            </div>
                        </div>
                     
                    </div>
                    <div className="help-arrow">
                        <div className="help-button">
                            <img className="buttonbg" src={buttonbg} alt="button" />
                           
                            <img className="arrow" src={arrow} alt="button" />
                            </div>
                    </div>

                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Help
