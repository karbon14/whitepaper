import React from 'react'
import PropTypes from 'prop-types'

// WEB seems to work in 96PPI
const WIDTH_96PPI = '794px'
const isBuild = process.env.BUILD === 'true' ? true : false

const styles = {
  background: {
    backgroundColor: isBuild ? 'transparent' : '#525659',
  },
  document: {
    width: WIDTH_96PPI,
    margin: 'auto',
    paddingTop: isBuild ? '0px' : '20px',
  },
}

export const Document = (props) => (
  <div style={styles.background}>
    <div style={styles.document}>{props.children}</div>
  </div>
)

Document.propTypes = {
  children: PropTypes.node,
}
