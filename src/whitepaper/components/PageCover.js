import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'

const isBuild = process.env.BUILD === 'true' ? true : false
const pathBuild = (file) => path.resolve(__dirname, `../images/${file}.png`)
const finalPath = (file) => (isBuild ? `file://${pathBuild(file)}` : `../${file}.png`)

const styles = {
  pageCover: (file) => ({
    backgroundImage: `url(${finalPath(file)})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  }),
}

export const PageCover = ({ file, children }) => <div style={styles.pageCover(file)}>{children}</div>

PageCover.propTypes = {
  children: PropTypes.node,
  file: PropTypes.string,
}
