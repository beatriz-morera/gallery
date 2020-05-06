import React from "react"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import classes from "./index.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image7: file(relativePath: { eq: "7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image8: file(relativePath: { eq: "8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image9: file(relativePath: { eq: "9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image10: file(relativePath: { eq: "10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image11: file(relativePath: { eq: "11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image12: file(relativePath: { eq: "12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image13: file(relativePath: { eq: "13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image14: file(relativePath: { eq: "14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image15: file(relativePath: { eq: "15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <main className={classes.main}>
          <Img fluid={data.image1.childImageSharp.fluid} />
          <Img fluid={data.image2.childImageSharp.fluid} />
          <Img fluid={data.image3.childImageSharp.fluid} />
          <Img fluid={data.image4.childImageSharp.fluid} />
          <Img fluid={data.image5.childImageSharp.fluid} />
          <Img fluid={data.image6.childImageSharp.fluid} />
          <Img fluid={data.image7.childImageSharp.fluid} />
          <Img fluid={data.image8.childImageSharp.fluid} />
          <Img fluid={data.image9.childImageSharp.fluid} />
          <Img fluid={data.image10.childImageSharp.fluid} />
          <Img fluid={data.image11.childImageSharp.fluid} />
          <Img fluid={data.image12.childImageSharp.fluid} />
          <Img fluid={data.image13.childImageSharp.fluid} />
          <Img fluid={data.image14.childImageSharp.fluid} />
          <Img fluid={data.image15.childImageSharp.fluid} />
        </main>
      </Layout>
    </>
  )
}

export default IndexPage
