import * as React from 'react'
import { motion } from 'framer-motion'

import classes from './menu-item.module.css'

export default ({ title, onClose }) => {
  return (
    <motion.li
      onClick={onClose}
      className={classes.item}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={classes.textPlaceholder}>{title}</div>
    </motion.li>
  )
}
