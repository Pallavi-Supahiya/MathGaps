import React from 'react'
import Layout from "../components/Layout"
import Head from "../components/Head"
import Register from "../components/Register"
import Seo from "../components/seo";

const register = () => {
    return (
        <Layout>
        <Seo title="Register" /> 
        <Head data={"Register"}/>
        <Register />
        </Layout>
    )
}

export default register
