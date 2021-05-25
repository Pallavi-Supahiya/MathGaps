import React from 'react'
import Layout from "../components/Layout";
import Head from "../components/Head";
import  Dropdown from "../components/faq/Dropdown"
import Question from "../components/faq/Question"
import Soon from "../components/faq/Soon"
import Seo from "../components/seo";

const faq = () => {
    return (
        
              <Layout>
      <Seo title="FAQ" /> 
      <Head data={"Frequently Asked Questions"}/>
      <Dropdown />
        <Question />
      <Soon />
      </Layout >
        
    )
}

export default faq;