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
    width: 794,
    height: 1122,
  },
})
