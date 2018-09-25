import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  text: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: 1.38,
    letterSpacing: '1px',
    color: '#4a4a4a',
  },
}

export const Text = ({ children }) => <p style={styles.text} dangerouslySetInnerHTML={{ __html: children }} />

Text.propTypes = {
  children: PropTypes.node,
}
