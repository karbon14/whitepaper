import { Font, StyleSheet } from '@react-pdf/react-pdf'

const isProduction = process.env.NODE_ENV === 'production'
const fontUnit = (size) => isProduction ? size : `${size}pt`

export const styles = StyleSheet.create({
  title: {
    display: 'block',
    fontSize: fontUnit(24),
    textAlign: 'center',
  },
  document: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: 794,
  },
  page: {
    paddingTop: fontUnit(35),
    paddingLeft: fontUnit(50),
    paddingRight: fontUnit(50),
    boxSizing: 'border-box',
    backgroundColor: '#FFF',
    width: 794,
    height: 1122,
    marginBottom: fontUnit(13),
    boxShadow: '0px 5px 10px #000',
    position: 'relative',
  },
  text: {
    margin: fontUnit(12),
    fontSize: fontUnit(12),
    textAlign: 'justify',
  },
  header: {...{
    display: 'block',
    fontSize: fontUnit(12),
    color: 'grey',
    textAlign: 'center',
    paddingTop: fontUnit(10),
  }, ...isProduction ? {} : { marginBottom: fontUnit(16) } },
  footer: {
    display: 'block',
    position: 'absolute',
    fontSize: fontUnit(12),
    bottom: 25,
    left: 35,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
})

Font.register(`${__dirname}/fonts/Roboto-Regular.ttf`, { family: 'Roboto' })
