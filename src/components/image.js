import React from "react"

import { motion } from "framer-motion"

import classes from "./image.module.css"

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
  hover: { scale: 0.95 },
}

const imageVariants = {
  hover: { scale: 1.2 },
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
        {children}
      </motion.div>
    </motion.div>
  </motion.div>
)
export default Image
