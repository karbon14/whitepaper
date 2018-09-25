import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'
import { SubTitle } from './SubTitle'
const isBuild = process.env.BUILD === 'true' ? true : false

const styles = {
  bigNumber: {
    fontFamily: 'Titillium Web',
    fontSize: '65px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#4a4a4a',
    marginBottom: '5px',
    lineHeight: '1',
  },
  littleRectangle: {
    display: 'block',
    width: '18px',
    border: 'solid 1px #26b3da',
    marginTop: '24px',
    marginBottom: '24px',
  },
  containerImage: {
    marginTop: '17px',
  },
  image: {
    width: '100%',
  },
}

const pathBuild = (file) => path.resolve(__dirname, `../images/${file}.jpeg`)
const getPathImage = (image) => (isBuild ? `file://${pathBuild(image)}` : `/${image}.jpeg`)

export const CoverTitle = ({ number, title, id, image }) => (
  <div>
    <h3 style={styles.bigNumber}>{number}</h3>
    <SubTitle id={id}>{title}</SubTitle>
    <span style={styles.littleRectangle} />
    <div style={styles.containerImage}>
      <img style={styles.image} src={getPathImage(image)} />
    </div>
  </div>
)

CoverTitle.propTypes = {
  children: PropTypes.node,
  number: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
}
