import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'
import splash from '../images/AboutSplash.png'

import classes from './about.module.css'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "AboutPic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ParallaxProvider>
      <SEO title="About" />
      <Menu
        links={[
          ['About', 'about'],
          ['Gallery', ''],
          ['Contact', 'contact'],
        ]}
      />
      <Layout footer={false}>
        <main className={classes.main}>
          <div className={classes.image}>
            <Img fluid={data.aboutImage.childImageSharp.fluid} />
          </div>
          <div className={classes.info}>
            <h1>About us</h1>
            <img src={splash} alt="splash" />
            <h4>
              The Hummingbird Art gallery was created by Beatriz Morera López, a
              cuban visual artist based on Barcelona, Spain.
            </h4>
            <p>
              "Hummingbirds are one of the most extraordinary creatures created
              by God. They have always been admired for their beauty and charm;
              it's definitely a delight to witness this magnificent creature
              humming around the flowers and enjoying the sweetness of their
              nectar to the fullest. Hummingbirds are bringers of joy, luck,
              hope, comfort, love, appreciation, enjoyment, independence,
              freedom, and optimism.
              <br />
              The Hummingbird Art Gallery is all about my love for hummers, my
              vision of them and their energy illustrated using watercolors,
              oils and acrylics."
            </p>
            <br />
            <p>Beatriz</p>
          </div>
        </main>
      </Layout>
    </ParallaxProvider>
  )
}

export default About
