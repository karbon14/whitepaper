import React from 'react'
import PropTypes from 'prop-types'
import { Document, Page, Text, View } from '@react-pdf/react-pdf'
import yimp from 'yaml-import/lib'
import path from 'path'
import { styles } from './styles'

const index = yimp.read(path.join(__dirname, 'sections/index.yml'))
const resume = yimp.read(path.join(__dirname, 'sections/resume.yml'))
const introduction = yimp.read(path.join(__dirname, 'sections/introduction.yml'))

export const Karbon14Whitepaper = ({ lang }) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.title}>Karbon14</Text>
    </Page>
    <Page size="A4" style={styles.body}>
      <Text style={styles.title}>{index[lang].TITLE}</Text>
    </Page>
    <Page size="A4" style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Karbon14 ~
      </Text>
      <View style={styles.section}>
        <Text style={styles.text}>{resume[lang]}</Text>
      </View>
      <Text style={styles.footer} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
    </Page>

    <Page size="A4" style={styles.body}>
      <Text style={styles.title}>{introduction[lang].TITLE}</Text>

      {introduction[lang].PARAGRAPHS.map((paragraphs, index) => (
        <div key={index}>
          <Text style={styles.title}>{paragraphs.SUBTITLE}</Text>
        </div>
      ))}

    </Page>

  </Document>
)

Karbon14Whitepaper.propTypes = {
  lang: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

Karbon14Whitepaper.defaultProps = {
  lang: 'EN',
}
