import { Font, StyleSheet } from '@react-pdf/react-pdf'

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  body: {
    paddingTop: 35,
    paddingBottom: 45,
    paddingHorizontal: 35,
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify',
  },
  header: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 15,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 25,
    left: 35,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
})

Font.register(`${__dirname}/fonts/Roboto-Regular.ttf`, { family: 'Roboto' })
