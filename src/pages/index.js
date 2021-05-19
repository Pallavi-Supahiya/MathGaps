import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import Tools from "../components/Home/Tools"
import Right from "../components/Home/Right"
import Learn from "../components/Home/Learn"
import Increase from "../components/Home/Increase"
import First from "../components/Home/First"
import Mail from "../components/Home/Mail"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
 <Layout>
   <Seo title="Home" />
   <Hero/>
   <Tools/>
   <Right/>
   <Learn/>
   <Increase/>
   <First/>
   <Mail/>
 </Layout>
 </>
)

export default IndexPage
