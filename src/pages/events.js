import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import eventsStyles from "./events.module.css"

const SecondPage = (props) => (
  <Layout>
    <SEO title="Events" />
    <h1>Hi from the events page</h1>
    <div className={eventsStyles.eventContainer}>
      <Img className={eventsStyles.eventImage} fluid={props.data.event1.childImageSharp.fluid}></Img>
      <p><b>Event Title</b></p>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  </Layout>
)

export const query = graphql `
  query {
    event1: file(relativePath: { eq: "balloon1.jpeg"}) {
      childImageSharp {
        fluid (maxWidth: 600, maxHeight: 800, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SecondPage
