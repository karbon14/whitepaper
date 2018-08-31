import React from 'react'
import PropTypes from 'prop-types'
import yimp from 'yaml-import/lib'
import path from 'path'
import { styles } from './styles'

const resume = yimp.read(path.join(__dirname, 'sections/resume.yml'))
const introduction = yimp.read(path.join(__dirname, 'sections/introduction.yml'))


export const Karbon14Whitepaper = ({ lang }) => (
  <div style={styles.document}>
    <div style={styles.cover}>
      <img style={styles.logo} src="https://karbon14.org/logo.svg" />
      <h1 style={styles.coverTitle}>Whitepaper</h1>
      <h2 style={styles.coverSubtitle}> {introduction[lang].VERSION} </h2>
    </div>

    <div style={{...styles.cover, ...styles.fontIndex}}>
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

    <div style={styles.cover}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].RESUME}} style={styles.title} />
      <span dangerouslySetInnerHTML={{__html: resume[lang]}} />
    </div>

    <div style={styles.documentWhitepaper}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].TITLE}} style={styles.title} />

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

      <span dangerouslySetInnerHTML={{__html: introduction[lang].INFORMATIONSECURITY}} style={styles.subsubtitle} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].INFORMATIONSECURITYTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].BENEFITS}} style={styles.subsubtitle} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].BENEFITSTEXT}} />
    </div>

    <div style={styles.documentWhitepaper}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].HOWWORK}} style={styles.title} />
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
    </div>

    <div style={styles.documentWhitepaper}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].CASEUSES}} style={styles.title} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].CASEUSESTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].BIRTHCERTIFICATES}} style={styles.subsubtitle} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].BIRTHCERTIFICATESTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].FAKENEWS}} style={styles.subsubtitle} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].FAKENEWSTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].PROOFGOVERNMENTAGENT}} style={styles.subsubtitle} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].PROOFGOVERNMENTAGENTTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].RESUINGPROOF}} style={styles.subsubtitle} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].RESUINGPROOFTEXT}} />
    </div>

    <div style={styles.documentWhitepaper}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].WHYINVEST}} style={styles.title} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].WHYINVESTTEXT}} />
    </div>

    <div style={styles.documentWhitepaper}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].USEBUDGET}} style={styles.title} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].USEBUDGETTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].CROWDSALE}} style={styles.subtitle} />

      <table style={styles.tableToken}>
        <tr>
          <td style={styles.tdLeft}>Total token crowdsale</td>
          <td style={styles.tdRight}>2.000.000.000</td>
        </tr>
        <tr>
          <td style={styles.tdLeft}>Soft cap</td>
          <td style={styles.tdRight}>U$D 5.000.000</td>
        </tr>
        <tr>
          <td style={styles.tdLeft}>Hard cap</td>
          <td style={styles.tdRight}>U$D 20.000.000</td>
        </tr>
        <tr>
          <td style={styles.tdLeft}>Value token</td>
          <td style={styles.tdRight}>U$S 0.01</td>
        </tr>
        <tr>
          <td style={styles.tdLeft}>Token type</td>
          <td style={styles.tdRight}>ERC-20</td>
        </tr>
        <tr>
          <td style={styles.tdLeft}>Token name</td>
          <td style={styles.tdRight}>K14</td>
        </tr>
      </table>

      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONCOMMUNITY}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONCOMMUNITYTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONDEVELOPMENT}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONDEVELOPMENTTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONFOUNDERS}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONMARKETING}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONMARKETINGTEXT}} />

      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONAIRDROP}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].DISTRIBUTIONAIRDROPTEXT}} />
    </div>

    <div style={styles.documentWhitepaper}>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].LEGALNOTE}} style={styles.title} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].LEGALNOTETEXT}} />
    </div>

    <div>
      <span dangerouslySetInnerHTML={{__html: introduction[lang].GLOSSARY}} style={styles.title} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].PROOFLIFEGLOSSARYTEXT}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].CERTIFICATEPROOFGLOSSARYTEXT}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].CRYPTONOTARYGLOSSARYTEXT}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].WALLETGLOSSARYTEXT}} />
      <span dangerouslySetInnerHTML={{__html: introduction[lang].VALIDATORGLOSSARYTEXT}} />
    </div>

  </div>
)

Karbon14Whitepaper.propTypes = {
  lang: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

Karbon14Whitepaper.defaultProps = {
  lang: 'EN',
}
