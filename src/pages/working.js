import React from 'react'
import Layout from "../components/Layout";
import Head from "../components/Head";
import Working from "../components/Working"
import Tutor from "../components/Working/Tutor"
import Assesssment from "../components/Working/WorkCurve/Assesssment"
import Performance from "../components/Working/WorkCurve/Performance"
import Gaps from "../components/Working/WorkCurve/Gaps"
import Lie from "../components/Working/WorkCurve/Lie"
import Program from "../components/Working/WorkCurve/Program"
import Easier from "../components/Working/WorkCurve/Easier"
import Learn from "../components/Home/Learn"
import First from "../components/Home/First";
import Seo from "../components/seo";

const working = () => {
    return (
        
              <Layout>
      <Seo title="How It Works" /> 
      <Head data={"How MathGaps Works"}/>
      <Working />
      <Assesssment />
      <Lie />
      <Performance />
      <Program/>
      <Gaps />
      <Easier/>
      <Tutor/>
      <First/>
      </Layout >
        
    )
}

export default working;
