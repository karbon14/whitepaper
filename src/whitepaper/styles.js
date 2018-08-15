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
    paddingBottom: fontUnit(65),
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
  subtitle: {
    color: '#3c78d8',
    fontSize: fontUnit(20),
    display: 'block',
    margin: '10px 0px',
  },
  subsubtitle: {
    fontWeight: 'bold',
    fontSize: fontUnit(17),
    display: 'block',
    margin: '5px 0px',
  },
  list: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  listLeftColumn: {
    flexDirection: 'column',
    marginRight: 10,
  },
  listRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  listBulletPoint: {
    fontSize: 10,
  },
  listContent: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  imageButerin: {
    height: '400px',
    width: '400px',
    display: 'block',
    margin: '25px auto'
  },
  imageToken: {
    height: '200px',
    width: '200px',
    display: 'block',
    margin: '25px 20px'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  bold: {
    fontWeight: 900,
    fontSize: fontUnit(12),
  }
})

Font.register(`${__dirname}/fonts/Roboto-Regular.ttf`, { family: 'Roboto' })
