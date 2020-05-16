import * as React from 'react'
import { Link } from 'gatsby'

import classes from './menu-item.module.css'

export default ({ title, onClose, link }) => {
  return (
    <li onClick={onClose} className={classes.item}>
      <Link
        key={title}
        to={`/${link}`}
        style={{ textDecoration: 'none' }}
        activeClassName={classes.active}
      >
        <div className={classes.textPlaceholder}>{title}</div>
      </Link>
    </li>
  )
}
