import React from 'react'

import { motion } from 'framer-motion'
import { imageVariants } from '../../services/animations'

import classes from './header.module.css'

const Header = () => {
  return <motion.div className={classes.header} variants={imageVariants} />
}

export default Header
