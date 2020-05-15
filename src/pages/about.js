import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { motion } from 'framer-motion'
import { imageVariants, textVariants } from '../services/animations'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'
import splash from '../images/AboutSplash.png'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import pinterest from '../images/pinterest.png'

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
    <>
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
          <motion.div className={classes.image} variants={imageVariants}>
            <Img fluid={data.aboutImage.childImageSharp.fluid} />
          </motion.div>
          <div className={classes.info}>
            <article>
              <motion.h1 variants={textVariants}>About us</motion.h1>
              <motion.img src={splash} alt="splash" variants={textVariants} />
              <motion.h4 variants={textVariants}>
                The Hummingbird Art gallery was created by Beatriz Morera López,
                a Cuban visual artist based on Barcelona, Spain.
              </motion.h4>
              <motion.p variants={textVariants}>
                "Hummingbirds are one of the most extraordinary creatures
                created by God. They have always been admired for their beauty
                and charm; it's definitely a delight to witness this magnificent
                creature humming around the flowers and enjoying the sweetness
                of their nectar to the fullest. Hummingbirds are bringers of
                joy, luck, hope, comfort, love, appreciation, enjoyment,
                independence, freedom, and optimism.
                <br />
                The Hummingbird Art Gallery is all about my love for hummers, my
                vision of them and their energy illustrated using watercolors,
                oils and acrylics."
              </motion.p>
              <br />
              <motion.p variants={textVariants}>Beatriz</motion.p>
            </article>
            <motion.section variants={textVariants}>
              <div className={classes.social}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/thehummingbirdartgallery/"
                >
                  <motion.img
                    src={fb}
                    alt="Facebook"
                    whileHover={{ scale: 0.8 }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/the_hummingbird_artgallery/"
                >
                  <motion.img
                    src={ig}
                    alt="Instagram"
                    whileHover={{ scale: 0.8 }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.pinterest.es/hummingbirdgallery/"
                >
                  <motion.img
                    src={pinterest}
                    alt="Pinterest"
                    whileHover={{ scale: 0.8 }}
                  />
                </a>
              </div>
              <p className={classes.copyright}>
                The Hummingbird Art Gallery©2020
              </p>
            </motion.section>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default About
