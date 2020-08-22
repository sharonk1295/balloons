import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import indexStyles from "./index.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    backPic: file(relativePath: { eq: "balloons_bg3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3200, maxHeight: 3200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)


  return (
    <BackgroundImage className={indexStyles.bgPic} fluid={data.backPic.childImageSharp.fluid} fadeIn={true}>
      <Layout>
        <SEO title="Home" />
          <div className={indexStyles.mainText}>
            <h1>Let me help you bring your imagination to life!</h1>
            <p>Through balloon decorations, your kids' parties will be more vibrant.</p>
            <h3>View some decoration examples here</h3>
            <Link to='/events'><button className={indexStyles.button}>Explore More</button></Link>
          </div>
      </Layout>
    </BackgroundImage>
  )
}

export default IndexPage
