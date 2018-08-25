import { Font, StyleSheet } from '@react-pdf/react-pdf'

const isProduction = process.env.NODE_ENV === 'production'

export const styles = StyleSheet.create({
  document: {
    display: 'flex',
    flexDirection: 'column',
    width: '850px',
    margin: 'auto',
    fontSize: '22px',
  },
  cover: {
    pageBreakAfter: 'always',
  },
  fontIndex: {
    fontSize: '18px',
  },
  logo: {
    paddingTop: '380px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '6s76px',
    height: '180px',
  },
  coverTitle: {
    margin: 'auto',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    fontFamily: 'san_francisco_textregular',
    fontSize: '72px',
  },
  coverSubtitle: {
    margin: 'auto',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    paddingTop: '20px',
    fontFamily: 'Arial Narrow, sans-serif',
    fontSize: '52px',
  },
  list: {
    listStyle: 'none',
  },
  documentWhitepaper: {
    fontSize: '22px',
    pageBreakAfter: 'always',
  },
  title: {
    color: '#3c78d8',
    fontSize: '38px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: '32px',
  },
  subsubtitle: {
    fontWeight: '400',
    color: '#000',
    fontSize: '26px'
  },
  imageButerin: {
    height: '400px',
    width: '400px',
    display: 'block',
    margin: '25px auto'
  },
  imageToken: {
    height: '100%',
    width: '100%',
    display: 'block',
    margin: '25px auto'
  },
  tableToken: {
    width: '65%',
    borderCollapse: 'collapse',
  },
  tdLeft: {
    border: '1px solid black',
    textAlign: 'center',
  },
  tdRight: {
    border: '1px solid black',
    textAlign: 'center',
  }
})
