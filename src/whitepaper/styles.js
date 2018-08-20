import { Font, StyleSheet } from '@react-pdf/react-pdf'

const isProduction = process.env.NODE_ENV === 'production'

export const styles = StyleSheet.create({
  document: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: 794,
  },
  cover: {
    width: '794px',
    height: '1300px',
    // height: '1122px',
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
