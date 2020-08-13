import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Let me help you bring your imagination to life!</h1>
    <p>Through balloon decorations, your kids' parties will be more vibrant.</p>
    <h3>View some decoration examples here</h3>
    <Link to='/events'><button>Explore More</button></Link>
  </Layout>
)

export default IndexPage
