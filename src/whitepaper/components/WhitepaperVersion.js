import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  position: {
    position: 'absolute',
    left: '128px',
    top: '564px',
  },
  title: {
    fontFamily: 'Titillium Web',
    fontSize: '44px',
    fontWeight: '300',
    letterSpacing: '1.9px',
    color: '#23b2c6',
    margin: 0,
  },
  subTitle: {
    fontFamily: 'Titillium Web',
    fontSize: '33px',
    fontWeight: '300',
    color: '#9ba7e0',
    margin: 0,
    position: 'relative',
    top: '-11px',
    left: '5px',
  },
}

export const WhitepaperVersion = ({ children }) => (
  <div style={styles.position}>
    <h1 style={styles.title}>Whitepaper</h1>
    <h2 style={styles.subTitle}>{children}</h2>
  </div>
)

WhitepaperVersion.propTypes = {
  children: PropTypes.node,
}
