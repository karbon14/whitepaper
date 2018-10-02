import React from 'react'
import PropTypes from 'prop-types'
import yimp from 'yaml-import/lib'
import path from 'path'
import { styles } from './styles'
import { Page } from './components/Page'
import { PageTitle } from './components/PageTitle'
import { PageFooter } from './components/PageFooter'
import { PageContainer } from './components/PageContainer'
import { PageCover } from './components/PageCover'
import { WhitepaperVersion } from './components/WhitepaperVersion'
import { Document } from './components/Document'
import { List } from './components/List'
import { Text } from './components/Text'
import { Legend } from './components/Legend'
import { TitleText } from './components/TitleText'
import { SubTitle } from './components/SubTitle'
import { ButerinPhoto } from './components/ButerinPhoto'
import { CoverTitle } from './components/CoverTitle'
import { ListItems } from './components/ListItems'
import { ListName } from './components/ListName'

const resume = yimp.read(path.join(__dirname, 'sections/resume.yml'))
const introduction = yimp.read(path.join(__dirname, 'sections/introduction.yml'))
const totalPage = 20

export const Karbon14Whitepaper = ({ lang }) => (
  <Document>
    <Page>
      <PageCover file='cover'>
        <WhitepaperVersion>{introduction[lang].VERSIONWP}</WhitepaperVersion>
      </PageCover>
    </Page>

    <Page>
      <PageCover file='index'>
        <h2 style={styles.indexTitle}>{introduction[lang].INDEX}</h2>
          <div style={styles.positionListIndex}>
          <List title={[introduction[lang].INDEXRESUME, '#indexResume']} />
          <List 
            title={[introduction[lang].INDEXINTRODUCTION, '#indexIntroduction']}
            items={[
              [introduction[lang].INDEXIWISK14, '#indexWisk14'],
              [introduction[lang].INDEXDEFPROBLEM, '#indexDefProblem'],
              [introduction[lang].INDEXWHYPROOFLIFE, '#indexWhyProofLife'],
              [introduction[lang].INDEXSTAKEHOLDERS, '#indexStakeholders'],
              [introduction[lang].INDEXSECURITY, '#indexSecurity'],
              [introduction[lang].INDEXBENEFITS, '#indexBenefits'],
            ]}
          />

          <List 
            title={[introduction[lang].INDEXHOWWORK, '#indexHowWork']}
            items={[
              [introduction[lang].INDEXCERTIFICATE, '#indexCertificate'],
              [introduction[lang].INDEXCRYPTO, '#indexCrypto'],
              [introduction[lang].INDEXLICENSECRYPTO, '#indexLicenseCrypto'],
              [introduction[lang].INDEXEXPLORER, '#indexExplorer'],
              [introduction[lang].INDEXWALLET, '#indexWallet'],
            ]}
          />

           <List 
            title={[introduction[lang].INDEXUSECASES, '#indexUseCases']}
            items={[
              [introduction[lang].INDEXBIRTH, '#indexBirth'],
              [introduction[lang].INDEXFAKENEWS, '#indexFakeNew'],
              [introduction[lang].INDEXPFAGENTS, '#indexPFAgents'],
              [introduction[lang].INDEXRESUING, '#indexReusing'],
            ]}
          />

          <List title={[introduction[lang].INDEXWHYINVEST, '#indexWhyInvest']} />
          <List title={[introduction[lang].INDEXDISTRIBUTION, '#indexDistribution']} />
          <List title={[introduction[lang].INDEXLEGALNOTE, '#indexLegalNote']} />
          <List title={[introduction[lang].INDEXGLOSSARY, '#indexGlossary']} />
 
          </div>
      </PageCover>
      <PageFooter textPage={introduction[lang].page} currentPage={2} totalPage={totalPage} contrast />
    </Page>

    <Page>
      <PageTitle id={'indexResume'}>{introduction[lang].RESUME}</PageTitle>

      <PageContainer>
        <Text>{resume[lang].first}</Text>
        <br/>
        <Legend>{resume[lang].second}</Legend>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={3} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle id={'indexIntroduction'}>{introduction[lang].introduction}</PageTitle>

      <PageContainer>
        <TitleText id={'indexWisk14'}>{introduction[lang].wisK14}</TitleText>
        <Text>{introduction[lang].wisK14TEXT}</Text>
        <br/>
        <TitleText id={'indexDefProblem'}>{introduction[lang].defProblem}</TitleText>
        <Text>{introduction[lang].defProblemTEXTFirst}</Text>
        <br/>
        <ListItems>{introduction[lang].defProblemTEXTFirstList}</ListItems>        
        <br/>
        <Legend>{introduction[lang].defProblemTEXTSecond}</Legend>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={4} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].introduction}</PageTitle>

      <PageContainer>
        <TitleText id={'indexWhyProofLife'}>{introduction[lang].wProofLife}</TitleText>
        <Text>{introduction[lang].wProofLifeTEXT}</Text>
        <br/>
        <TitleText id={'indexStakeholders'}>{introduction[lang].pinterested}</TitleText>
        <SubTitle>{introduction[lang].governments}</SubTitle>
        <br/>
        <Text>{introduction[lang].governmentsText}</Text>
        <Legend>{introduction[lang].governmentsTextSecond}</Legend>
        <Text>{introduction[lang].governmentsTextThird}</Text>     
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={5} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].introduction}</PageTitle>

      <PageContainer>
        <SubTitle>{introduction[lang].exchangeCrypto}</SubTitle>
        <br/>
        <Text>{introduction[lang].exchangeCryptoTextFirst}</Text>
        <br/>
        <Legend>{introduction[lang].exchangeCryptoTextSecond}</Legend>
        <br/>
        <SubTitle>{introduction[lang].users}</SubTitle>
        <br/>
        <Text>{introduction[lang].usersText}</Text>
        <br/>
        <SubTitle>{introduction[lang].banks}</SubTitle>
        <br/>
        <Text>{introduction[lang].banksText}</Text>     
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={6} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].introduction}</PageTitle>

      <PageContainer>
        <ButerinPhoto>
          {introduction[lang].mediaTitle}
        </ButerinPhoto>
        <br/><br/>
        <Text>{introduction[lang].mediaText}</Text>    
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={7} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].introduction}</PageTitle>

      <PageContainer>
        <TitleText id={'indexSecurity'}>{introduction[lang].informationSecurity}</TitleText>
        <Text>{introduction[lang].informationSecurityTextFirst}</Text>
        <Legend>{introduction[lang].informationSecurityTextSecond}</Legend>
        <Text>{introduction[lang].informationSecurityTextThird}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={8} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].introduction}</PageTitle>

      <PageContainer>
        <TitleText id={'indexBenefits'}>{introduction[lang].benefits}</TitleText>
        <Text>{introduction[lang].benefitsText}</Text>
        <br/>
        <SubTitle>{introduction[lang].shortenTimes}</SubTitle>
        <br/>
        <Text>{introduction[lang].shortenTimesText}</Text>
        <br/>
        <SubTitle>{introduction[lang].securityInformationProvided}</SubTitle>
        <br/>
        <Text>{introduction[lang].securityInformationProvidedText}</Text>
        <br/>
        <SubTitle>{introduction[lang].trustCompaniesEntities}</SubTitle>
        <br/>
        <Text>{introduction[lang].trustCompaniesEntitiesText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={9} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle id={'indexHowWork'}>{introduction[lang].howWork}</PageTitle>

      <PageContainer>
        <Text>{introduction[lang].howWorkTextFirst}</Text>
        <br/>
        <SubTitle>{introduction[lang].howWorkTextSecond}</SubTitle>
        <br/><br/>
        <ListItems>{introduction[lang].howWorkTextThird}</ListItems>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={10} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].howWork}</PageTitle>
  
      <PageContainer>
        <CoverTitle
            number={'1.'}
            title={introduction[lang].certificateProofLife}
            id={'indexCertificate'}
            image={'ProofLifeCertificates'}
        />
        <br/><br/>
        <Text>{introduction[lang].certificateProofLifeText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={11} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].howWork}</PageTitle>

      <PageContainer>
      <CoverTitle
            number={'2.'}
            title={introduction[lang].crypto}
            id={'indexCrypto'}
            image={'CryptoNotaries'}
        />
        <br/><br/>
        <Text>{introduction[lang].cryptoText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={12} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].howWork}</PageTitle>

      <PageContainer>
        <CoverTitle
            number={'3.'}
            title={introduction[lang].licenseCrypto}
            id={'indexLicenseCrypto'}
            image={'CriptoNotaryLicense'}
        />
        <br/><br/>
        <Text>{introduction[lang].licenseCryptoText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={13} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].howWork}</PageTitle>

      <PageContainer>
        <CoverTitle
            number={'4.'}
            title={introduction[lang].validatorProofLife}
            id={'indexExplorer'}
            image={'ProofLifeValidator'}
        />
        <br/><br/>
        <Text>{introduction[lang].validatorProofLifeText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={14} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle>{introduction[lang].howWork}</PageTitle>

      <PageContainer>
        <CoverTitle
            number={'5.'}
            title={introduction[lang].wallet}
            id={'indexWallet'}
            image={'Karbon14Wallet'}
        />
        <br/><br/>
        <Text>{introduction[lang].walletText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={15} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle id={'indexUseCases'}>{introduction[lang].useCases}</PageTitle>

      <PageContainer>
        <Text>{introduction[lang].useCasesText}</Text>
        <br/>
        <SubTitle id={'indexBirth'}>{introduction[lang].birthCertificates}</SubTitle>
        <br/>
        <Text>{introduction[lang].birthCertificatesText}</Text>
        <br/>
        <SubTitle id={'indexFakeNew'}>{introduction[lang].fakeNews}</SubTitle>
        <br/>
        <Text>{introduction[lang].fakeNewsText}</Text>
        <br/>
        <SubTitle id={'indexPFAgents'}>{introduction[lang].proofGovernmentAgent}</SubTitle>
        <br/>
        <Text>{introduction[lang].proofGovernmentAgentText}</Text>
        <br/>
        <SubTitle id={'indexReusing'}>{introduction[lang].reusingProof}</SubTitle>
        <br/>
        <Text>{introduction[lang].reusingProofText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={16} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle id={'indexWhyInvest'}>{introduction[lang].whyInvest}</PageTitle>

      <div style={styles.bigRectangle}>
        <div style={styles.logoK14}></div>
      </div>

      <PageContainer>
        <Text>{introduction[lang].whyInvestTextFirst}</Text>
        <br/>
        <Legend>{introduction[lang].whyInvestTextSecond}</Legend>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={17} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle id={'indexDistribution'}>{introduction[lang].useBudget}</PageTitle>

      <div style={styles.useBudgetContainer}>
        <div style={styles.useBudgetProvisionContainer}>
          <div style={styles.useBudgetProvisionFirst} />
          <div style={styles.useBudgetProvisionSecond} />
          <div style={styles.useBudgetProvisionThird} />
          <div style={styles.useBudgetProvisionFourth} />
          <div style={styles.useBudgetProvisionFifth} />
        </div>
 
        <div style={styles.useBudgetDescriptionContainer}>
          <div style={styles.useBudgetDescriptionTextContainer}>
            <p style={styles.useBudgetDescription} dangerouslySetInnerHTML={{__html: introduction[lang].useBudgetText}}></p>
          </div >

          <div style={styles.useBudgetLabelsContainer}>
            <ol style={styles.useBudgetLabelsContainerList}>
              <li style={styles.useBudgetLabelsList}>
                <p style={{...styles.useBudgetFont, ...styles.useBudgetFontValue }}>
                  <span style={{ ...styles.rectangleCommunity, ...styles.rectangleCommunityValueFirst }}></span>
                  {introduction[lang].distribution[0][0]}
                </p>
              </li>
              <li style={styles.useBudgetLabelsList}>
                <p style={{...styles.useBudgetFont, ...styles.useBudgetFontValue }}>
                  <span style={{ ...styles.rectangleCommunity, ...styles.rectangleCommunityValueSecond }}></span>
                  {introduction[lang].distribution[1][0]}
                </p>
              </li>
              <li style={styles.useBudgetLabelsList}>
                <p style={{...styles.useBudgetFont, ...styles.useBudgetFontValue }}>
                  <span style={{ ...styles.rectangleCommunity, ...styles.rectangleCommunityValueThird }}></span>
                  {introduction[lang].distribution[2][0]}
                </p>
              </li>
              <li style={styles.useBudgetLabelsList}>
                <p style={{...styles.useBudgetFont, ...styles.useBudgetFontValue }}>
                  <span style={{ ...styles.rectangleCommunity, ...styles.rectangleCommunityValueFourth }}></span>
                  {introduction[lang].distribution[3][0]}
                </p>
              </li>
              <li style={styles.useBudgetLabelsList}>
                <p style={{...styles.useBudgetFont, ...styles.useBudgetFontValue }}>
                  <span style={{ ...styles.rectangleCommunity, ...styles.rectangleCommunityValueFifth }}></span>
                  {introduction[lang].distribution[4][0]}
                </p>
              </li>
            </ol>
          </div>
          </div>
        </div>

      <PageContainer style={{marginTop:'-40px'}}>
        <ListName items={introduction[lang].distribution} />

        {/* <h3 style={{...styles.tableSubtitle}}>Crowdsale</h3> */}
        <SubTitle style={{ color: '#25b3dc', marginTop: '35px', marginBottom: '5px'}}>Crowdsale</SubTitle>

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
      
      </PageContainer>
      <PageFooter textPage={introduction[lang].page} currentPage={18} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle id={'indexLegalNote'}>{introduction[lang].legalNote}</PageTitle>

      <PageContainer>
        <Text>{introduction[lang].legalNoteText}</Text>
      </PageContainer>

      <PageFooter textPage={introduction[lang].page} currentPage={19} totalPage={totalPage} />
    </Page>

    <Page>
      <PageTitle id={'indexGlossary'}>{introduction[lang].glossary}</PageTitle>

      <PageContainer>
        <SubTitle>{introduction[lang].proofLifeGlossary}</SubTitle>
        <Text>{introduction[lang].proofLifeGlossaryText}</Text>
        <br/>

        <SubTitle>{introduction[lang].certificateProofGlossary}</SubTitle>
        <Text>{introduction[lang].certificateProofGlossaryText}</Text>
        <br/>

        <SubTitle>{introduction[lang].cryptoNotaryGlossary}</SubTitle>
        <Text>{introduction[lang].cryptoNotaryGlossaryText}</Text>
        <br/>

        <SubTitle>{introduction[lang].walletGlossary}</SubTitle>
        <Text>{introduction[lang].walletGlossaryText}</Text>
        <br/>
        
        <SubTitle>{introduction[lang].validatorGlossary}</SubTitle>
        <Text>{introduction[lang].validatorGlossaryText}</Text>
      </PageContainer>
      
      <PageFooter textPage={introduction[lang].page} currentPage={20} totalPage={totalPage} />
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
