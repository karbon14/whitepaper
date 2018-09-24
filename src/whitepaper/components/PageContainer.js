import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  pageContainer: {
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '58px',
  },
}

export const PageContainer = (props) => <div style={styles.pageContainer}>{props.children}</div>

PageContainer.propTypes = {
  children: PropTypes.node,
}
