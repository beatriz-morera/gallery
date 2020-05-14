import React from 'react'

import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

import hoverSplash from '../../images/HoverSplash.png'

import classes from './image.module.css'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
}

const frameVariants = {
  hover: { scale: 0.97 },
}

const imageVariants = {
  hover: { scale: 0.97 },
}

const Image = ({ children }) => (
  <motion.div className={classes.thumbnail} variants={thumbnailVariants}>
    <motion.div
      className={classes.frame}
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      {/* <Link to={`/image/${i}`}> */}

      <motion.div variants={imageVariants} transition={transition}>
        <Parallax y={[-20, 20]}>{children}</Parallax>
      </motion.div>
    </motion.div>
  </motion.div>
)
export default Image
