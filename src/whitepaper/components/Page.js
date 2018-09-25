import React from 'react'
import PropTypes from 'prop-types'

// WEB seems to work in 96PPI
const WIDTH_96PPI = '794px'
const HEIGHT_96PPI = '1124px'
const isBuild = process.env.BUILD === 'true' ? true : false

const styles = {
  page: {
    backgroundColor: isBuild ? 'transparent' : '#FFF',
    boxShadow: isBuild ? 'none' : '0px 7px 24px -3px rgba(0,0,0,0.75)',
    marginBottom: isBuild ? '0px' : '15px',
    height: HEIGHT_96PPI,
    width: WIDTH_96PPI,
    pageBreakAfter: 'always',
    position: 'relative',
  },
}

export const Page = (props) => <div style={styles.page}>{props.children}</div>

Page.propTypes = {
  children: PropTypes.node,
}
