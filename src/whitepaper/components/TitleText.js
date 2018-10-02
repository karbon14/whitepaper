import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  titleText: {
    fontFamily: 'Titillium Web',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: 1.13,
    color: '#25b3dc',
    marginBottom: '20px',
  },
}

export const TitleText = ({ children, id }) => (
  <p id={id} style={styles.titleText} dangerouslySetInnerHTML={{ __html: children }} />
)

TitleText.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
}
