import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Navbar.module.css'

const title = (props) => {
  return (
    <nav className={classes.Container}>
      {props.children}
    </nav>
  )
}

title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default title
