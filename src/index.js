import React from 'react'
import fs from 'fs'
import path from 'path'
import ReactPDF, {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet
} from '@react-pdf/react-pdf'
import { whitepaper } from './whitepaper'

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  body: {
    paddingTop: 35,
    paddingBottom: 45,
    paddingHorizontal: 35
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify'
  },
  header: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 15,
    textAlign: 'center'
  },
  footer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 25,
    left: 35,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  }
})

Font.register(`${__dirname}/fonts/Roboto-Regular.ttf`, { family: 'Roboto' })

const Karbon14Whitepaper = ({ lang }) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.title}>Karbon14</Text>
    </Page>
    <Page size="A4" style={styles.body}>
      <Text style={styles.title}>{whitepaper.words.index[lang]}</Text>
    </Page>
    <Page size="A4" style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Karbon14 ~
      </Text>
      <View style={styles.section}>
        {Object.entries(whitepaper).map(([key, section]) => {
          return <Text style={styles.text}>{section[lang]}</Text>
        })}
      </View>
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
)

const langs = ['EN', 'ES']
const outputDir = 'whitepaper'

const createDistFolder = () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }
}

const getDistPath = () => path.join(__dirname, '..', outputDir)

createDistFolder()

langs.forEach(lang => {
  ReactPDF.render(
    <Karbon14Whitepaper lang={lang} />,
    `${getDistPath()}/whitepaper_Karbon14_${lang}.pdf`
  )
})
