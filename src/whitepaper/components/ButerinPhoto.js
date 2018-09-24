import React from 'react'
import PropTypes from 'prop-types'
import { SubTitle } from './SubTitle'

const styles = {
  massMediaContainer: {
    backgroundColor: '#f7f4f4',
    position: 'relative',
  },
  imageButerin: {
    width: '260px',
  },
  mediaTitleStyle: {
    position: 'absolute',
    left: '294px',
    bottom: '14px',
  },
  rectangle: {
    width: '100%',
    height: '4px',
    backgroundColor: '#26b3da',
    display: 'block',
  },
}

export const ButerinPhoto = ({ children }) => (
  <div>
    <div style={styles.massMediaContainer}>
      <img
        style={styles.imageButerin}
        src="https://cdn1.imggmi.com/uploads/2018/8/14/9c3ef3be6e0139c71e080c2b1920e972-full.jpg"
      />
      <div style={styles.mediaTitleStyle}>
        <SubTitle>{children}</SubTitle>
      </div>
    </div>
    <span style={styles.rectangle} />
  </div>
)

ButerinPhoto.propTypes = {
  children: PropTypes.node,
}
