import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  pageContainer: {
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '58px',
  },
}

export const PageContainer = ({ children, style = {} }) => (
  <div style={Object.assign({}, styles.pageContainer, style)}>{children}</div>
)

PageContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}
