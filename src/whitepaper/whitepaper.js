import React from 'react'
import PropTypes from 'prop-types'
import { Document, Page, Text, View, Image } from '@react-pdf/react-pdf'
import yimp from 'yaml-import/lib'
import path from 'path'
import { styles } from './styles'

const index = yimp.read(path.join(__dirname, 'sections/index.yml'))
const resume = yimp.read(path.join(__dirname, 'sections/resume.yml'))
const introduction = yimp.read(path.join(__dirname, 'sections/introduction.yml'))


export const Karbon14Whitepaper = ({ lang }) => (
  <Document style={styles.document}>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Karbon14</Text>
    </Page>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{index[lang].TITLE}</Text>
    </Page>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header} fixed>
        ~ Karbon14 ~
      </Text>
      <View style={styles.section}>
        <Text style={styles.text}>{resume[lang]}</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.title}>{introduction[lang].TITLE}</Text>

      <Text style={styles.subtitle}>{introduction[lang].WISK14}</Text>
      <Text style={styles.text}> {introduction[lang].WISK14TEXT} </Text>

      <Text style={styles.subtitle}>{introduction[lang].DEFPROBLEM}</Text>
      <Text style={styles.text}>{introduction[lang].DEFPROBLEMTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].WPROOFLIFE}</Text>
      <Text style={styles.text}>{introduction[lang].WPROOFLIFETEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].PINTERESTED}</Text>

      <Text style={styles.subsubtitle}>{introduction[lang].GOVERNMENTS}</Text>
      <Text style={styles.text}>{introduction[lang].GOVERNMENTSTEXT}</Text>

      <Text style={styles.subsubtitle}>{introduction[lang].EXCHANGECRYPTO}</Text>
      <Text style={styles.text}>{introduction[lang].EXCHANGECRYPTOTEXT}</Text>

      <Text style={styles.subsubtitle}>{introduction[lang].USERS}</Text>
      <Text style={styles.text}>{introduction[lang].USERSTEXT}</Text>

      <Text style={styles.subsubtitle}>{introduction[lang].BANKS}</Text>
      <Text style={styles.text}>{introduction[lang].BANKSTEXT}</Text>

      <Text style={styles.subsubtitle}>{introduction[lang].MEDIA}</Text>
      <Text style={styles.text}>{introduction[lang].MEDIATEXT}</Text>

      <Image
        src="https://cdn1.imggmi.com/uploads/2018/8/14/9c3ef3be6e0139c71e080c2b1920e972-full.jpg"
        style={styles.imageButerin}
      />

      <Text style={styles.subtitle}>{introduction[lang].INFORMATIONSECURITY}</Text>
      <Text style={styles.text}>{introduction[lang].INFORMATIONSECURITYTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].BENEFITS}</Text>
      <Text style={styles.text}>{introduction[lang].BENEFITSTEXT}</Text>
    
      <Text style={styles.subtitle}>{introduction[lang].HOWWORK}</Text>
      <Text style={styles.text}>{introduction[lang].HOWWORKTEXT}</Text>

      <Text style={styles.subsubtitle}>{introduction[lang].CERTIFICATEPROOFLIFE}</Text>

      <Text style={styles.subtitle}>{introduction[lang].CRYPTO}</Text>
      <Text style={styles.text}>{introduction[lang].CRYPTOTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].LICENSECRYPTO}</Text>
      <Text style={styles.text}>{introduction[lang].LICENSECRYPTOTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].VALIDATORPROOFLIFE}</Text>
      <Text style={styles.text}>{introduction[lang].VALIDATORPROOFLIFETEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].WALLET}</Text>
      <Text style={styles.text}>{introduction[lang].WALLETTEXT}</Text>

      <Text style={styles.title}>{introduction[lang].CASEUSES}</Text>
      <Text style={styles.text}>{introduction[lang].CASEUSESTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].BIRTHCERTIFICATES}</Text>
      <Text style={styles.text}>{introduction[lang].BIRTHCERTIFICATESTEXT}</Text>


      <Text style={styles.subtitle}>{introduction[lang].FAKENEWS}</Text>
      <Text style={styles.text}>{introduction[lang].FAKENEWSTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].PROOFGOVERNMENTAGENT}</Text>
      <Text style={styles.text}>{introduction[lang].PROOFGOVERNMENTAGENTTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].RESUINGPROOF}</Text>
      <Text style={styles.text}>{introduction[lang].RESUINGPROOFTEXT}</Text>

      <Text style={styles.title}>{introduction[lang].WHYINVEST}</Text>
      <Text style={styles.text}>{introduction[lang].WHYINVESTTEXT}</Text>

      <Text style={styles.title}>{introduction[lang].USEBUDGET}</Text>
      <Text style={styles.text}>{introduction[lang].USEBUDGETTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].CROWDSALE}</Text>

      <Text style={styles.bold}>Total token crowdsale:</Text>
      <Text style={styles.text}>2.000.000.000</Text>

      <Image
        src="https://cdn1.imggmi.com/uploads/2018/8/15/84ac984fdae2efb408cd33a9746bc670-full.jpg"
        style={styles.imageToken}
      />

      <Text style={styles.subtitle}>{introduction[lang].DISTRIBUTIONCOMMUNITY}</Text>
      <Text style={styles.text}>{introduction[lang].DISTRIBUTIONCOMMUNITYTEXT}</Text>

      <Text style={styles.subtitle}>{introduction[lang].DISTRIBUTIONDEVELOPMENT}</Text>
      <Text style={styles.text}>{introduction[lang].DISTRIBUTIONDEVELOPMENTTEXT}</Text>
      
      <Text style={styles.subtitle}>{introduction[lang].DISTRIBUTIONFOUNDERS}</Text>
      
      <Text style={styles.subtitle}>{introduction[lang].DISTRIBUTIONMARKETING}</Text>
      <Text style={styles.text}>{introduction[lang].DISTRIBUTIONMARKETINGTEXT}</Text>
      
      <Text style={styles.subtitle}>{introduction[lang].DISTRIBUTIONMARKETINGTEXT}</Text>
      <Text style={styles.text}>{introduction[lang].DISTRIBUTIONMARKETINGTEXTTEXT}</Text>
      
      <Text style={styles.subtitle}>{introduction[lang].DISTRIBUTIONAIRDROP}</Text>
      <Text style={styles.text}>{introduction[lang].DISTRIBUTIONAIRDROPTEXT}</Text>

      <Text style={styles.title}>{introduction[lang].LEGALNOTE}</Text>
      <Text style={styles.text}>{introduction[lang].LEGALNOTETEXT}</Text>
      
      <Text style={styles.title}>{introduction[lang].GLOSSARY}</Text>

      <Text style={styles.text}>{introduction[lang].PROOFLIFEGLOSSARYTEXT}</Text>
      <Text style={styles.text}>{introduction[lang].CERTIFICATEPROOFGLOSSARYTEXT}</Text>
      <Text style={styles.text}>{introduction[lang].CRYPTONOTARYGLOSSARYTEXT}</Text>
      <Text style={styles.text}>{introduction[lang].WALLETGLOSSARYTEXT}</Text>
      <Text style={styles.text}>{introduction[lang].VALIDATORGLOSSARYTEXT}</Text>





      
      
      
      
      
      
      
      <Text style={styles.footer} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
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
