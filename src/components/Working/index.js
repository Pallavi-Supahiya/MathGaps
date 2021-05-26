import React from 'react'
import girl from "../../images/Working/girl.svg"
import tick from "../../images/Working/tick.svg"
import assessment from "../../images/Working/curve/assessment.svg"
import lie from "../../images/Working/curve/lie.svg"
import easier from "../../images/Working/curve/easier.svg"
import gaps from "../../images/Working/curve/gaps.svg"
import performance from "../../images/Working/curve/performance.svg"
import program from "../../images/Working/curve/program.svg"
import oval from "../../images/ovals.svg"
import curve from "../../images/curve.svg"
import "./style.scss"

const Working = () => {
    return (
        <div className="working">
          <img src={curve} alt="curve" className="working-curve"></img>
            <div className="container">
           
<div class="title">
  <h2>How MathGaps works</h2>

</div>
<div class="timeline">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="timeline-container">
          <div class="timeline-end">
            <img src={girl} alt="girl" />
          </div>
          <div class="timeline-continue">
          <div class="row timeline-right">
              <div class="col-md-6">
              <img class="timeline-date" src={assessment} alt="assessment"/>
              </div>
              <img src={oval}alt="oval" className="ovals-oval"></img>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon">
                    <i class="fa fa-gift"></i>
                  </div>
                  <div class="timeline-text">
                    <h3>Your student takes a free diagnostic assessment</h3>
                    <p>Students complete the test on the MathGaps platform in less than an hour.</p>
                  </div>
                </div>
              </div>
            </div>
           

           

            

           

            <div class="row timeline-left">
              <div class="col-md-6 d-md-none d-block">
              <img class="timeline-date" src={lie} alt="lie"/>
              </div>
              <img src={oval}alt="oval" className="ovals-oval"></img>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon d-md-none d-block">
                    <i class="fa fa-cogs"></i>
                  </div>
                  <div class="timeline-text">
                  <h3>An algorithim accurately detects where student’s MathGaps lie</h3>
                  <p>Any gap formed over the past four years of maths learning will be identifed to ensure that it can be filled.</p>
                    
                  </div>
                  <div class="timeline-icon d-md-block d-none">
                    <i class="fa fa-cogs"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-md-block d-none">
              <img class="timeline-date" src={lie} alt="lie"/>
              </div>
            </div>


            <div class="row timeline-right">
              <div class="col-md-6">
              
              <img class="timeline-date" src={performance} alt="performance"/>
              </div>
              <img src={oval}alt="oval" className="ovals-oval"></img>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon">
                    <i class="fa fa-briefcase"></i>
                  </div>
                  <div class="timeline-text">
                  <h3>You receive a comprehensive report on performance</h3>
                  <p>A detailed account on performance across all required mathematical skills. This report will include detailed analytics on understanding.</p>
              
                  </div>
                </div>
              </div>
            </div>

            <div class="row timeline-left">
              <div class="col-md-6 d-md-none d-block">
              <img class="timeline-date" src={program} alt="program"/>
              
              </div>
              <img src={oval}alt="oval" className="ovals-oval"></img>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon d-md-none d-block">
                    <i class="fa fa-home"></i>
                  </div>
                  <div class="timeline-text">
                  <h3>Each student is generated a  personal learning  program</h3>
                
                  
                    <p>Students performance data is analysed to  generate a program that outlines the optimal  order to learn any missing skills.</p>
                   
                   
                  </div>
                  <div class="timeline-icon d-md-block d-none">
                    <i class="fa fa-home"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-md-block d-none">
              <img class="timeline-date" src={program} alt="program"/>
            
              
              </div>
            </div>

            <div class="row timeline-right">
              <div class="col-md-6">
              <img class="timeline-date" src={gaps} alt="gaps"/>
             
              
              </div>
              <img src={oval}alt="oval" className="ovals-oval"></img>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon">
                    <i class="fa fa-running"></i>
                  </div>
                  <div class="timeline-text">
                  <h3>Students will often work alongside a tutor to fill any gaps</h3>
                   
                    <p>Based on the results, we can recommend the most suitable tutor from our high-quality partner organisations.</p>
               
                    
                  </div>
                </div>
              </div>
            </div>

            
          
            <div class="row timeline-left">
              <div class="col-md-6 d-md-none d-block">
              <img class="timeline-date" src={easier} alt="easier"/>
              </div>
              <img src={oval}alt="oval" className="ovals-oval"></img>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon d-md-none d-block">
                    <i class="fa fa-business-time"></i>
                  </div>
                  <div class="timeline-text">
                    <h3>Students use the study assistant tool to make new content easier</h3>
                    <p>This tool will ensure your student has all the pre-requsite knowledge before learning a new skill in class or with a tutor, greatly improving ease of understanding.</p>
                  </div>
                  <div class="timeline-icon d-md-block d-none">
                    <i class="fa fa-business-time"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-md-block d-none">
              <img class="timeline-date" src={easier} alt="easier"/>
              </div>
            </div>
          </div>
          <div class="timeline-start">
          <img src={tick} alt="tick" />
          </div>
          <div class="timeline-launch">
            <div class="timeline-box">
              <div class="timeline-text">
                <h3>Once students repair their MathGaps, they see a notable improvement in confidence and performance.</h3>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


            </div>
            
        </div>
    )
}

export default Working
