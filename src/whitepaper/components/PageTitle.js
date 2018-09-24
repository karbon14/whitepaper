import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'

const isBuild = process.env.BUILD === 'true' ? true : false
const pathBuild = path.resolve(__dirname, '../images/title.png')
const finalPath = isBuild ? `file://${pathBuild}` : '../title.png'

const styles = {
  titleCover: {
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${finalPath})`,
    width: '100%',
    height: '90px',
  },
  title: {
    fontFamily: 'Titillium Web',
    fontSize: '26px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '1.1px',
    color: '#FFF',
    paddingLeft: '95px',
    lineHeight: '100px',
  },
}

export const PageTitle = (props) => (
  <div style={styles.titleCover}>
    <h2 style={styles.title}>{props.children}</h2>
  </div>
)

PageTitle.propTypes = {
  children: PropTypes.children,
}
