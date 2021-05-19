import * as React from "react"
import Layout from "../components/Layout"
import Head from "../components/Products/Head"
import Help from "../components/Products/Curve/Help"
import Algorithm from "../components/Products/Curve/Algorithm"
import Report from "../components/Products/Curve/Report"

import Increase from "../components/Home/Increase"
import First from "../components/Home/First"


import Seo from "../components/seo"

const IndexPage = () => (
  <>
 <Layout>
   <Seo title="Products" />
  <Head />
  <Help />
  <Algorithm />
  <Report />
   <Increase/>
   <First/>
  
 </Layout>
 </>
)

export default IndexPage
