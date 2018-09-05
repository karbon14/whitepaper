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
      <h2>{introduction[lang].INDEX}</h2>
      <ul style={styles.list}>
        <li>
          <h2> <a href="#indexResume" style={styles.unstyleLink}> {introduction[lang].INDEXRESUME} </a> </h2>
        </li>

        <li>
          <h2> <a href="#indexIntroduction" style={styles.unstyleLink}> {introduction[lang].INDEXINTRODUCTION} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexWisk14" style={styles.unstyleLink}> {introduction[lang].INDEXIWISK14} </a> </p>
          </li>
          <li>
            <p> <a href="#indexDefProblem" style={styles.unstyleLink}> {introduction[lang].INDEXDEFPROBLEM} </a> </p>
          </li>
          <ul style={styles.list}>
            <li>
              <p> <a href="#indexWhyProofLife" style={styles.unstyleLink}> {introduction[lang].INDEXWHYPROOFLIFE} </a> </p>
            </li>
          </ul>
          <li>
            <p> <a href="#indexStakeholders" style={styles.unstyleLink}> {introduction[lang].INDEXSTAKEHOLDERS} </a> </p>
          </li>
          <li>
            <p> <a href="#indexSecurity" style={styles.unstyleLink}> {introduction[lang].INDEXSECURITY} </a> </p>
          </li>
          <li>
            <p> <a href="#indexBenefits" style={styles.unstyleLink}> {introduction[lang].INDEXBENEFITS} </a> </p>
          </li>
        </ul>

        <li>
          <h2> <a href="#indexHowWork" style={styles.unstyleLink}> {introduction[lang].INDEXHOWWORK} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexCertificate" style={styles.unstyleLink}> {introduction[lang].INDEXCERTIFICATE} </a> </p>
          </li>
          <li>
            <p> <a href="#indexCrypto" style={styles.unstyleLink}> {introduction[lang].INDEXCRYPTO} </a> </p>
          </li>
          <li>
            <p> <a href="#indexLicenseCrypto" style={styles.unstyleLink}> {introduction[lang].INDEXLICENSECRYPTO} </a> </p>
          </li>
          <li>
            <p> <a href="#indexExplorer" style={styles.unstyleLink}> {introduction[lang].INDEXEXPLORER} </a> </p>
          </li>
          <li>
            <p> <a href="#indexWallet" style={styles.unstyleLink}> {introduction[lang].INDEXWALLET} </a> </p>
          </li>
        </ul>

        <li>
          <h2> <a href="#indexUseCases" style={styles.unstyleLink}> {introduction[lang].INDEXUSECASES} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexBirth" style={styles.unstyleLink}> {introduction[lang].INDEXBIRTH} </a> </p>
          </li>
          <li>
            <p> <a href="#indexFakeNew" style={styles.unstyleLink}> {introduction[lang].INDEXFAKENEWS} </a> </p>
          </li>
          <li>
            <p> <a href="#indexPFAgents" style={styles.unstyleLink}> {introduction[lang].INDEXPFAGENTS} </a> </p>
          </li>
          <li>
            <p> <a href="#indexReusing" style={styles.unstyleLink}> {introduction[lang].INDEXRESUING} </a> </p>
          </li>
        </ul>

        <li>
          <h2> <a href="#indexRoadmap" style={styles.unstyleLink}> {introduction[lang].INDEXROADMAP} </a> </h2>
        </li>

        <li>
          <h2> <a href="#indexDistribution" style={styles.unstyleLink}> {introduction[lang].INDEXDISTRIBUTION} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexSellTokens" style={styles.unstyleLink}> {introduction[lang].INDEXSELLTOKENS} </a> </p>
          </li>
        </ul>

        <li>
          <h2> <a href="#indexWhyInvest" style={styles.unstyleLink}> {introduction[lang].INDEXWHYINVEST} </a> </h2>
        </li>
        <li>
          <h2> <a href="#indexBudget" style={styles.unstyleLink}> {introduction[lang].INDEXBUDGET} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexCrowdsale" style={styles.unstyleLink}> {introduction[lang].INDEXCROWDSALE} </a> </p>
          </li>
        </ul>

        <li>
          <h2> <a href="#indexLegalNote" style={styles.unstyleLink}> {introduction[lang].INDEXLEGALNOTE} </a> </h2>
        </li>

        <li>
          <h2> <a href="#indexGlossary" style={styles.unstyleLink}> {introduction[lang].INDEXGLOSSARY} </a> </h2>
        </li>
      </ul>
    </div>

    <div style={styles.cover}>
      <h2 style={styles.title} id="indexResume">{introduction[lang].RESUME}</h2>
      <p dangerouslySetInnerHTML={{__html: resume[lang]}}></p>
    </div>

    <div style={styles.documentWhitepaper}>
      <h2 style={styles.title} id="indexIntroduction">{introduction[lang].introduction}</h2>

      <h3 style={styles.subtitle} id="indexWisk14">{introduction[lang].wisK14}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].wisK14TEXT}}></p>

      <h3 style={styles.subtitle} id="indexDefProblem">{introduction[lang].defProblem}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].defProblemTEXT}}></p>

      <h3 style={styles.subsubtitle} id="indexWhyProofLife">{introduction[lang].wProofLife}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].wProofLifeTEXT}}></p>      

      <h3 style={styles.subtitle} id="indexStakeholders">{introduction[lang].pinterested}</h3>

      <h3 style={styles.subsubtitle}>{introduction[lang].governments}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].governmentsText}}></p>      

      <h3 style={styles.subsubtitle}>{introduction[lang].exchangeCrypto}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].exchangeCryptoText}}></p>      

      <h3 style={styles.subsubtitle}>{introduction[lang].users}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].usersText}}></p>      

      <h3 style={styles.subsubtitle}>{introduction[lang].banks}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].banksText}}></p>      

      <h3 style={styles.subsubtitle}>{introduction[lang].mediaTitle}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].mediaText}}></p>      

      <img style={styles.imageButerin} src="https://cdn1.imggmi.com/uploads/2018/8/14/9c3ef3be6e0139c71e080c2b1920e972-full.jpg" />

      <h3 style={styles.subsubtitle} id="indexSecurity">{introduction[lang].informationSecurity}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].informationSecurityText}}></p>      

      <h3 style={styles.subsubtitle} id="indexBenefits">{introduction[lang].benefits}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].benefitsText}}></p>      
    </div>

    <div style={styles.documentWhitepaper}>
      <h2 style={styles.title} id="indexHowWork">{introduction[lang].howWork}</h2>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].howWorkText}}></p>  

      <h3 style={styles.subsubtitle} id="indexCertificate">{introduction[lang].certificateProofLife}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].certificateProofLifeText}}></p>

      <h3 style={styles.subsubtitle} id="indexCrypto">{introduction[lang].crypto}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].cryptoText}}></p>

      <h3 style={styles.subsubtitle} id="indexLicenseCrypto">{introduction[lang].licenseCrypto}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].licenseCryptoText}}></p>

      <h3 style={styles.subsubtitle} id="indexExplorer">{introduction[lang].validatorProofLife}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].validatorProofLifeText}}></p>

      <h3 style={styles.subsubtitle} id="indexWallet">{introduction[lang].wallet}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].walletText}}></p>
    </div>

    <div style={styles.documentWhitepaper}>
      <h2 style={styles.title} id="indexUseCases">{introduction[lang].useCases}</h2>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].useCasesText}}></p>  

      <h3 style={styles.subsubtitle} id="indexBirth">{introduction[lang].birthCertificates}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].birthCertificatesText}}></p>

      <h3 style={styles.subsubtitle} id="indexFakeNew">{introduction[lang].fakeNews}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].fakeNewsText}}></p>

      <h3 style={styles.subsubtitle} id="indexPFAgents">{introduction[lang].proofGovernmentAgent}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].proofGovernmentAgentText}}></p>

      <h3 style={styles.subsubtitle} id="indexReusing">{introduction[lang].reusingProof}</h3>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].reusingProofText}}></p>
    </div>

    <div style={styles.documentWhitepaper}>
      <h2 style={styles.title} id="indexWhyInvest">{introduction[lang].whyInvest}</h2>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].whyInvestText}}></p>  
    </div>

    <div style={styles.documentWhitepaper}>
      <h2 style={styles.title} id="indexBudget">{introduction[lang].useBudget}</h2>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].useBudgetText}}></p>  

      <h3 style={styles.subtitle} id="indexCrowdsale">{introduction[lang].crowdsale}</h3>

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

      <h4 style={styles.subsubtitle}>{introduction[lang].distributionCommunity}</h4>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].distributionCommunityText}}></p>

      <h4 style={styles.subsubtitle}>{introduction[lang].distributionDevelopment}</h4>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].distributionDevelopmentText}}></p>

      <h4 style={styles.subsubtitle}>{introduction[lang].distributionFounders}</h4>

      <h4 style={styles.subsubtitle}>{introduction[lang].distributionMarketing}</h4>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].distributionMarketingText}}></p>

      <h4 style={styles.subsubtitle}>{introduction[lang].distributionAirdrop}</h4>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].distributionAirdropText}}></p>
    </div>

    <div style={styles.documentWhitepaper}>
      <h2 style={styles.title} id="indexLegalNote">{introduction[lang].legalNote}</h2>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].legalNoteText}}></p>
    </div>

    <div>
      <h2 style={styles.title} id="indexGlossary">{introduction[lang].glossary}</h2>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].proofLifeGlossaryText}}></p>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].certificateProofGlossaryText}}></p>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].cryptoNotaryGlossaryText}}></p>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].walletGlossaryText}}></p>
      <p dangerouslySetInnerHTML={{__html: introduction[lang].validatorGlossaryText}}></p>
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
