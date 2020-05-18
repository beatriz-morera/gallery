import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { motion } from 'framer-motion'

import Image from '../components/image'
import splash from '../images/TitleSplash.png'

import classes from './gallery.module.css'

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "gallery" }
        }
        sort: { fields: base }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <motion.main
      className={classes.main}
      initial="initial"
      animate="enter"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className={classes.title}>
        <img src={splash} alt="splash" />
        <h2>Discover</h2>
        <br />
        <h2>our designs</h2>
      </div>
      {data.allFile.edges.map(image => (
        <Image key={image.node.base.split('.')[0]}>
          <Img fluid={image.node.childImageSharp.fluid} />
        </Image>
      ))}
    </motion.main>
  )
}

export default Gallery
