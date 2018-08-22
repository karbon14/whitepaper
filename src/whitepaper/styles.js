import { Font, StyleSheet } from '@react-pdf/react-pdf'

const isProduction = process.env.NODE_ENV === 'production'

export const styles = StyleSheet.create({
  document: {
    display: 'flex',
    flexDirection: 'column',
    // width: 794,
  },
  cover: {
    width: '794px',
    height: '1350px',
  },
  coverBackground: {
    height: '1350px',
  },
  logo: {
    paddingTop: '480px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '338px',
    height: '90px',
  },
  coverTitle: {
    margin: 'auto',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    fontFamily: 'san_francisco_textregular',
    fontSize: '62px',
  },
  coverSubtitle: {
    margin: 'auto',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    paddingTop: '20px',
    fontFamily: 'Arial Narrow, sans-serif',
    fontSize: '42px',
  },
  list: {
    listStyle: 'none',
  },
  subtitle: {
    color: '#3c78d8',
    fontSize: '16px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  subsubtitle: {
    color: '#000',
    fontSize: '14px'
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
})
