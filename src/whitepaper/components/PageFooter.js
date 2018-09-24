import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  footer: {
    position: 'absolute',
    right: '28px',
    bottom: '36px',
  },
  footerFrom: {
    fontFamily: 'Titillium Web',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#231994',
  },
  footerTo: {
    fontWeight: '300',
  },
  contastPage: {
    color: '#FFF',
  },
  contrastTotal: {
    color: '#9ba7e0',
  },
}

export const PageFooter = ({ textPage, currentPage, totalPage, contrast }) => (
  <div style={styles.footer}>
    <p style={contrast ? { ...styles.footerFrom, ...styles.contastPage } :  { ...styles.footerFrom } }>
      {textPage} {currentPage} <span style={contrast ? { ...styles.footerTo, ...styles.contrastTotal } :  { ...styles.footerTo }}>| {totalPage}</span>
    </p>
  </div>
)

PageFooter.propTypes = {
  textPage: PropTypes.string,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  contrast: PropTypes.bool
}

