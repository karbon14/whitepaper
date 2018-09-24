import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  subtitle: {
    fontFamily: 'Titillium Web',
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: 1.13,
    color: '#4a4a4a',
  },
}

export const SubTitle = ({ children }) => <p style={styles.subtitle} dangerouslySetInnerHTML={{ __html: children }} />

SubTitle.propTypes = {
  children: PropTypes.node,
}
