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
      <Image>
        <Img fluid={data.image1.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image2.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image3.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image4.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image5.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image6.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image7.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image8.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image9.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image10.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image11.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image12.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image13.childImageSharp.fluid} />
      </Image>
      <Image>
        <Img fluid={data.image14.childImageSharp.fluid} />
      </Image>
    </motion.main>
  )
}

export default Gallery
