import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            
            <h1>Howdy.</h1>
            <h2>This is the Home page...</h2>
            <p>Did you want to contact me to tell me how great I am? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage