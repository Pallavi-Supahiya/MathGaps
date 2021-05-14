import React from 'react'
import Line from "../../../images/Home/Right/Rectangle 2.svg"
import textbook from "../../../images/Home/Right/textbook 1.svg"
import webbrowser from "../../../images/Home/Right/web-browser 1.svg"
import australia from "../../../images/Home/Right/australia 1.svg"
import monitor from "../../../images/Home/Right/monitor 1.svg"



import "./style.scss"

const Right = () => {
    let data = [
        {
          img: textbook,
        
          content: "Available for students in Years 7-11",
          
        },
        {
          img: webbrowser,
         
          content:
            "Faster and more accurate diagnostics than tutors or teachers",
    
        },
        {
          img: australia,
         
          content: "Curriculum alligned to ensure direct performance improvement",
        
        },
        {
          img: monitor,
          
          content: "We can match you  with tutors that  cater to your individual needs",
          
        },
      ]
    
    return (
        <div className="right">
            <div className="right-Container">
                <div className="right-Heading">
                <div className="Heading-content">
                 <h3>Why MathGaps is right for you.</h3>  
                        <div className="right-Heading-Image">
                        <img src={Line} alt="line"></img>   
                         </div>
                </div>
                </div>
                <div className="right-Cards">
                {data.map((element,index )=> {
                       return (
                        
                          <div className="card-image">
                            <div className="card-image-bg">
                              <img className="card-icon" src={element.img}></img>
                         
                          
                          <span className="card-content">{element.content}</span>
                          </div>
                          </div>
                        
                      )
                    })}

                </div>
            </div>
            
        </div>
    )
}

export default Right
