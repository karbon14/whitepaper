import { Font, StyleSheet } from '@react-pdf/react-pdf'

export const styles = StyleSheet.create({
  title: {
    display: 'block',
    fontSize: 24,
    textAlign: 'center',
  },
  document: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: 794,
  },
  page: {
    padding: '35px 65px',
    boxSizing: 'border-box',
    backgroundColor: '#FFF',
    width: 794,
    height: 1122,
    marginBottom: 20,
    boxShadow: '0px 5px 10px #000',
    position: 'relative',
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify',
  },
  header: {
    display: 'block',
    fontSize: 12,
    color: 'grey',
    marginBottom: '40px',
    textAlign: 'center',
    paddingTop: '10px',
  },
  footer: {
    display: 'block',
    position: 'absolute',
    fontSize: '12pt',
    bottom: 25,
    left: 35,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
})

Font.register(`${__dirname}/fonts/Roboto-Regular.ttf`, { family: 'Roboto' })
