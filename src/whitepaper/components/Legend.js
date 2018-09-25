import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  text: {
    fontFamily: 'Titillium Web',
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: 1,
    color: '#24b5a9',
    letterSpacing: '1px',
  },
}

export const Legend = ({ children }) => <p style={styles.text} dangerouslySetInnerHTML={{ __html: children }} />

Legend.propTypes = {
  children: PropTypes.node,
}
