import React from 'react'
import PropTypes from 'prop-types'
import yimp from 'yaml-import/lib'
import path from 'path'
import { styles } from './styles'

const index = yimp.read(path.join(__dirname, 'sections/index.yml'))
const resume = yimp.read(path.join(__dirname, 'sections/resume.yml'))
const introduction = yimp.read(path.join(__dirname, 'sections/introduction.yml'))


export const Karbon14Whitepaper = ({ lang }) => (
  <div style={styles.document}>
    <div style={styles.cover}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].INDEX}} />

      <ul style={styles.list}>
        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXRESUME}} /> </li>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXINTRODUCTION}} /> </li>
        <ul style={styles.list}>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXIWISK14}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXDEFPROBLEM}} /> </li>
          <ul style={styles.list}>
            <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXWHYPROOFLIFE}} /> </li>
          </ul>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXSTAKEHOLDERS}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXSECURITY}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXBENEFITS}} /> </li>
        </ul>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXHOWWORK}} /> </li>
        <ul style={styles.list}>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXCERTIFICATE}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXCRYPTO}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXLICENSECRYPTO}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXEXPLORER}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXWALLET}} /> </li>
        </ul>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXUSECASES}} /> </li>
        <ul style={styles.list}>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXBIRTH}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXFAKENEWS}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXPFAGENTS}} /> </li>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXRESUING}} /> </li>
        </ul>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXTEAM}} /> </li>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXROADMAP}} /> </li>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXDISTRIBUTION}} /> </li>
        <ul style={styles.list}>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXSELLTOKENS}} /> </li>
        </ul>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXWHYINVEST}} /> </li>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXBUDGET}} /> </li>
        <ul style={styles.list}>
          <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXCROWDSALE}} /> </li>
        </ul>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXLEGALNOTE}} /> </li>

        <li><span dangerouslySetInnerHTML={{__html: introduction[lang].INDEXGLOSSARY}} /> </li>
      </ul>
    </div>

    <span dangerouslySetInnerHTML={{__html: introduction[lang].RESUME}} />
    <span dangerouslySetInnerHTML={{__html: resume[lang]}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].TITLE}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].WISK14}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].WISK14TEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].DEFPROBLEM}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].DEFPROBLEMTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].WPROOFLIFE}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].WPROOFLIFETEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].PINTERESTED}} style={styles.subtitle} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].GOVERNMENTS}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].GOVERNMENTSTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].EXCHANGECRYPTO}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].EXCHANGECRYPTOTEXT}} />


    <span dangerouslySetInnerHTML={{__html: introduction[lang].USERS}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].USERSTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].BANKS}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].BANKSTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].MEDIA}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].MEDIATEXT}} />

    <img style={styles.imageButerin} src="https://cdn1.imggmi.com/uploads/2018/8/14/9c3ef3be6e0139c71e080c2b1920e972-full.jpg" />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].INFORMATIONSECURITY}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].INFORMATIONSECURITYTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].BENEFITS}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].BENEFITSTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].HOWWORK}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].HOWWORKTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].CERTIFICATEPROOFLIFE}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].CERTIFICATEPROOFLIFETEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].CRYPTO}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].CRYPTOTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].LICENSECRYPTO}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].LICENSECRYPTOTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].VALIDATORPROOFLIFE}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].VALIDATORPROOFLIFETEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].WALLET}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].WALLETTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].CASEUSES}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].CASEUSESTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].BIRTHCERTIFICATES}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].BIRTHCERTIFICATESTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].FAKENEWS}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].FAKENEWSTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].PROOFGOVERNMENTAGENT}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].PROOFGOVERNMENTAGENTTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].RESUINGPROOF}} style={styles.subsubtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].RESUINGPROOFTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].WHYINVEST}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].WHYINVESTTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].USEBUDGET}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].USEBUDGETTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].CROWDSALE}} style={styles.subtitle} />

    <img style={styles.imageToken} src="https://cdn1.imggmi.com/uploads/2018/8/15/84ac984fdae2efb408cd33a9746bc670-full.jpg" />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONCOMMUNITY}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONCOMMUNITYTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONDEVELOPMENT}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONDEVELOPMENTTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONFOUNDERS}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONMARKETING}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONMARKETINGTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONAIRDROP}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONAIRDROPTEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].LEGALNOTE}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].LEGALNOTETEXT}} />

    <span dangerouslySetInnerHTML={{__html: introduction[lang].GLOSSARY}} style={styles.subtitle} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].PROOFLIFEGLOSSARYTEXT}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].CERTIFICATEPROOFGLOSSARYTEXT}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].CRYPTONOTARYGLOSSARYTEXT}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].WALLETGLOSSARYTEXT}} />
    <span dangerouslySetInnerHTML={{__html: introduction[lang].VALIDATORGLOSSARYTEXT}} />

  </div>
  // <Document style={styles.document}>
  //   <Page size="A4" style={styles.page}>
  //     <Text style={styles.title}>Karbon14</Text>
  //   </Page>
  //   <Page size="A4" style={styles.page}>
  //     <Text style={styles.title}>{index[lang].TITLE}</Text>
  //   </Page>
  //   <Page size="A4" style={styles.page}>
  //     <Text style={styles.header} fixed>
  //       ~ Karbon14 ~
  //     </Text>
  //     <View style={styles.section}>
  //       <Text style={styles.text}>{resume[lang]}</Text>
  //     </View>
  //     <Text style={styles.footer} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
  //   </Page>
  // </Document>
)

Karbon14Whitepaper.propTypes = {
  lang: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

Karbon14Whitepaper.defaultProps = {
  lang: 'EN',
}
