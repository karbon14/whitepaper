import React from 'react'
import PropTypes from 'prop-types'
import yimp from 'yaml-import/lib'
import path from 'path'
import { styles } from './styles'

const resume = yimp.read(path.join(__dirname, 'sections/resume.yml'))
const introduction = yimp.read(path.join(__dirname, 'sections/introduction.yml'))

export const Karbon14Whitepaper = ({ lang }) => (
  <div style={styles.document}>

    <div style={styles.coverImage}>
      <h1 style={styles.coverTitle}>Whitepaper</h1>
      <h2 style={styles.coverSubtitle}> {introduction[lang].VERSIONWP} </h2>
    </div>

    <div style={{...styles.index, ...styles.fontIndex}}>
      <h2 style={styles.indexTitle}>{introduction[lang].INDEX}</h2>
      <ul style={styles.listContainer}>
        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexResume" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXRESUME} </a> </h2>
        </li>
        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexIntroduction" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXINTRODUCTION} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p><a href="#indexWisk14" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXIWISK14} </a></p>
          </li>
          <li>
            <p> <a href="#indexDefProblem" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXDEFPROBLEM} </a> </p>
          </li>
          <li>
            <p> <a href="#indexWhyProofLife" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXWHYPROOFLIFE} </a> </p>
          </li>
          <li>
            <p> <a href="#indexStakeholders" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXSTAKEHOLDERS} </a> </p>
          </li>
          <li>
            <p> <a href="#indexSecurity" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXSECURITY} </a> </p>
          </li>
          <li>
            <p> <a href="#indexBenefits" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXBENEFITS} </a> </p>
          </li>
        </ul>

        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexHowWork" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXHOWWORK} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexCertificate" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXCERTIFICATE} </a> </p>
          </li>
          <li>
            <p> <a href="#indexCrypto" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXCRYPTO} </a> </p>
          </li>
          <li>
            <p> <a href="#indexLicenseCrypto" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXLICENSECRYPTO} </a> </p>
          </li>
          <li>
            <p> <a href="#indexExplorer" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXEXPLORER} </a> </p>
          </li>
          <li>
            <p> <a href="#indexWallet" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXWALLET} </a> </p>
          </li>
        </ul>

        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexUseCases" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXUSECASES} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexBirth" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXBIRTH} </a> </p>
          </li>
          <li>
            <p> <a href="#indexFakeNew" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXFAKENEWS} </a> </p>
          </li>
          <li>
            <p> <a href="#indexPFAgents" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXPFAGENTS} </a> </p>
          </li>
          <li>
            <p> <a href="#indexReusing" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXRESUING} </a> </p>
          </li>
        </ul>

        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexRoadmap" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXROADMAP} </a> </h2>
        </li>

        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexDistribution" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXDISTRIBUTION} </a> </h2>
        </li>
        <ul style={styles.list}>
          <li>
            <p> <a href="#indexSellTokens" style={{...styles.unstyleLink, ...styles.indexText}}> {introduction[lang].INDEXSELLTOKENS} </a> </p>
          </li>
        </ul>

        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexWhyInvest" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXWHYINVEST} </a> </h2>
        </li>
        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexBudget" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXBUDGET} </a> </h2>
        </li>
        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexLegalNote" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXLEGALNOTE} </a> </h2>
        </li>

        <li>
          <h2 style={styles.indexSubTitle}> <a href="#indexGlossary" style={{...styles.unstyleLink, ...styles.indexSubTitleLink}}> {introduction[lang].INDEXGLOSSARY} </a> </h2>
        </li>
      </ul>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title} id="indexResume">{introduction[lang].RESUME}</h2>
      </div>
      <div style={styles.resumeContainer}>
        <p style={styles.resumeFirst} dangerouslySetInnerHTML={{__html: resume[lang].first}}></p>
        <p style={styles.resumeSecond} dangerouslySetInnerHTML={{__html: resume[lang].second}}></p>
      </div>
      <div style={styles.footer}>
        <p style={styles.footerFrom}>Page 3 <span style={styles.footerTo}>| 20</span></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].introduction}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.subtitle} id="indexWisk14">{introduction[lang].wisK14}</h3>
        <p style={styles.introductionText} dangerouslySetInnerHTML={{__html: introduction[lang].wisK14TEXT}}></p>

        <h3 style={styles.subtitle} id="indexDefProblem">{introduction[lang].defProblem}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].defProblemTEXTFirst}}></p>

        <p style={styles.introductionTextSecond} dangerouslySetInnerHTML={{__html: introduction[lang].defProblemTEXTSecond}}></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].introduction}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.subtitle} id="indexWhyProofLife">{introduction[lang].wProofLife}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].wProofLifeTEXT}}></p>      

        <h3 style={styles.subtitle} id="indexStakeholders">{introduction[lang].pinterested}</h3>

        <h3 style={styles.subsubtitle}>{introduction[lang].governments}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].governmentsText}}></p>      
        <p style={styles.introductionTextSecond} dangerouslySetInnerHTML={{__html: introduction[lang].governmentsTextSecond}}></p>      
        <p dangerouslySetInnerHTML={{__html: introduction[lang].governmentsTextThird}}></p>      
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].introduction}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.subsubtitle}>{introduction[lang].exchangeCrypto}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].exchangeCryptoTextFirst}}></p>      
        <p style={styles.introductionTextSecond} dangerouslySetInnerHTML={{__html: introduction[lang].exchangeCryptoTextSecond}}></p>      

        <h3 style={{...styles.subsubtitle, ...styles.paddingTop}}>{introduction[lang].users}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].usersText}}></p>      

        <h3 style={{...styles.subsubtitle, ...styles.paddingTop}}>{introduction[lang].banks}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].banksText}}></p>      
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].introduction}</h2>
      </div>
      <div style={styles.introductionContainer}>
        <div style={styles.massMediaContainer}>
          <img style={styles.imageButerin} src="https://cdn1.imggmi.com/uploads/2018/8/14/9c3ef3be6e0139c71e080c2b1920e972-full.jpg" />
          <h3 style={{...styles.subsubtitle, ...styles.mediaTitleStyle}}>{introduction[lang].mediaTitle}</h3>
        </div>
        <span style={styles.rectangle}></span>

        <p dangerouslySetInnerHTML={{__html: introduction[lang].mediaText}}></p>      
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].introduction}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.subtitle} id="indexSecurity">{introduction[lang].informationSecurity}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].informationSecurityTextFirst}}></p>      
        <p style={styles.introductionTextSecond} dangerouslySetInnerHTML={{__html: introduction[lang].informationSecurityTextSecond}}></p>      
        <p dangerouslySetInnerHTML={{__html: introduction[lang].informationSecurityTextThird}}></p>      
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title} id="indexBenefits">{introduction[lang].introduction}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.subtitle}>{introduction[lang].benefits}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].benefitsText}}></p>    

        <h3 style={styles.subsubtitle}>{introduction[lang].shortenTimes}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].shortenTimesText}}></p>   

        <h3 style={styles.subsubtitle}>{introduction[lang].securityInformationProvided}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].securityInformationProvidedText}}></p>      

        <h3 style={styles.subsubtitle}>{introduction[lang].trustCompaniesEntities}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].trustCompaniesEntitiesText}}></p>      
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].howWork}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].howWorkTextFirst}}></p>  
        <h3 style={styles.subsubtitle} dangerouslySetInnerHTML={{__html: introduction[lang].howWorkTextSecond}}></h3>  
        <p dangerouslySetInnerHTML={{__html: introduction[lang].howWorkTextThird}}></p>  
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].howWork}</h2>
      </div>
      <div style={styles.introductionContainer}>
        <h3 style={styles.bigNumber}>1.</h3>
        <h3 style={styles.subsubtitle} id="indexCertificate">{introduction[lang].certificateProofLife}</h3>
        <span style={styles.littleRectangle}></span>

        <div style={{...styles.howWorkImage, ...styles.certificateProofLifeImage}}></div>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].certificateProofLifeText}}></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].howWork}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.bigNumber}>2.</h3>
        <h3 style={styles.subsubtitle} id="indexCrypto">{introduction[lang].crypto}</h3>
        <span style={styles.littleRectangle}></span>
        <div style={{...styles.howWorkImage, ...styles.cryptoNotariesImage}}></div>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].cryptoText}}></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].howWork}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.bigNumber}>3.</h3>
        <h3 style={styles.subsubtitle} id="indexLicenseCrypto">{introduction[lang].licenseCrypto}</h3>
        <span style={styles.littleRectangle}></span>
        <div style={{...styles.howWorkImage, ...styles.criptoNotaryLicenseImage}}></div>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].licenseCryptoText}}></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].howWork}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.bigNumber}>4.</h3>
        <h3 style={styles.subsubtitle} id="indexExplorer">{introduction[lang].validatorProofLife}</h3>
        <span style={styles.littleRectangle}></span>
        <div style={{...styles.howWorkImage, ...styles.proofLifeValidatorImage}}></div>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].validatorProofLifeText}}></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].howWork}</h2>
      </div>

      <div style={styles.introductionContainer}>
        <h3 style={styles.bigNumber}>5.</h3>
        <h3 style={styles.subsubtitle} id="indexWallet">{introduction[lang].wallet}</h3>
        <span style={styles.littleRectangle}></span>
        <div style={{...styles.howWorkImage, ...styles.karbon14WalletImage}}></div>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].walletText}}></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title} id="indexUseCases">{introduction[lang].useCases}</h2>
      </div>

      <div style={styles.introductionContainer}>
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
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title}>{introduction[lang].whyInvest}</h2>
      </div>
      <div style={styles.bigRectangle}>
        <div style={styles.logoK14}></div>
      </div>

      <div style={styles.introductionContainer}>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].whyInvestTextFirst}}></p>  
        <p style={styles.resumeSecond} dangerouslySetInnerHTML={{__html: introduction[lang].whyInvestTextSecond}}></p>  
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title} id="indexBudget">{introduction[lang].useBudget}</h2>
      </div>
      <div style={styles.useBudgetContainer}>
        <p style={styles.useBudgetDescription} dangerouslySetInnerHTML={{__html: introduction[lang].useBudgetText}}></p> 
        {/* <div>
          <ol>
            <li>
              <span style={styles.rectangleCommunity}></span>
              <p style={styles.useBudgetFont}>50% Comunidad</p>
            </li> 
          </ol>
        </div>  */}
      </div>

      <div style={styles.paddingBudgetUse}>
        <div>
          <p style={{...styles.useBudgetFont}}>
            <span style={{...styles.subsubtitle}} dangerouslySetInnerHTML={{__html: introduction[lang].distributionCommunity}} />:&nbsp;
            {introduction[lang].distributionCommunityText}
          </p>
        </div>

        <div>
          <p style={{...styles.useBudgetFont}}>
            <span style={{...styles.subsubtitle}} dangerouslySetInnerHTML={{__html: introduction[lang].distributionDevelopment}} />:&nbsp;
            {introduction[lang].distributionDevelopmentText}
          </p>
        </div>
        
        <div>
          <p style={{...styles.useBudgetFont}}>
            <span style={{...styles.subsubtitle}} dangerouslySetInnerHTML={{__html: introduction[lang].distributionFounders}} />
          </p>
        </div>

        <div>
          <p style={{...styles.useBudgetFont}}>
            <span style={{...styles.subsubtitle}} dangerouslySetInnerHTML={{__html: introduction[lang].distributionMarketing}} />:&nbsp;
            {introduction[lang].distributionMarketingText}
          </p>
        </div>

        <div>
          <p style={{...styles.useBudgetFont}}>
            <span style={{...styles.subsubtitle}} dangerouslySetInnerHTML={{__html: introduction[lang].distributionAirdrop}} />:&nbsp;
            {introduction[lang].distributionAirdropText}
          </p>
        </div>
        <h3 style={{...styles.subtitle, ...styles.marginCrowdsale}}>Crowdsale</h3>

        <table style={styles.tableToken}>
          <tr>
            <td style={{...styles.tdLeftBorderTwo, ...styles.tableTitle}}>Total token crowdsale</td>
            <td style={{...styles.tdRightBorderTwo, ...styles.tableTitle}}>3,600,000,000 K14</td>
          </tr>
          <tr>
            <td style={{...styles.tdLeft, ...styles.tableFont}}>Soft cap</td>
            <td style={{...styles.tdRight, ...styles.tableFont}}>15,000 ETH</td>
          </tr>
          <tr>
            <td style={{...styles.tdLeft, ...styles.tableFont}}>Hard cap</td>
            <td style={{...styles.tdRight, ...styles.tableFont}}>60,000 ETH</td>
          </tr>
          <tr>
            <td style={{...styles.tdLeft, ...styles.tableFont}}>Token value</td>
            <td style={{...styles.tdRight, ...styles.tableFont}}>1 ETH = 30,000 K14</td>
          </tr>
          <tr>
            <td style={{...styles.tdLeft, ...styles.tableFont}}>Token type</td>
            <td style={{...styles.tdRight, ...styles.tableFont}}>ERC-20</td>
          </tr>
          <tr>
            <td style={{...styles.tdLeftWithoutBorder, ...styles.tableFont}}>Token name</td>
            <td style={{...styles.tdRightWithoutBorder, ...styles.tableFont}}>K14</td>
          </tr>
        </table>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title} id="indexLegalNote">{introduction[lang].legalNote}</h2>
      </div>
      <div style={styles.introductionContainer}>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].legalNoteText}}></p>
      </div>
    </div>

    <div style={styles.documentWhitepaper}>
      <div style={styles.titleCover}>
        <h2 style={styles.title} id="indexGlossary">{introduction[lang].glossary}</h2>
      </div>
      <div style={styles.introductionContainer}>
        <h3 style={styles.subsubtitle}>{introduction[lang].proofLifeGlossary}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].proofLifeGlossaryText}}></p>

        <h3 style={styles.subsubtitle}>{introduction[lang].certificateProofGlossary}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].certificateProofGlossaryText}}></p>

        <h3 style={styles.subsubtitle}>{introduction[lang].cryptoNotaryGlossary}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].cryptoNotaryGlossaryText}}></p>

        <h3 style={styles.subsubtitle}>{introduction[lang].walletGlossary}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].walletGlossaryText}}></p>

        <h3 style={styles.subsubtitle}>{introduction[lang].validatorGlossary}</h3>
        <p dangerouslySetInnerHTML={{__html: introduction[lang].validatorGlossaryText}}></p>
      </div>
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
