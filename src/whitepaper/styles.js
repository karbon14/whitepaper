import { Font, StyleSheet } from '@react-pdf/react-pdf'

const isProduction = process.env.NODE_ENV === 'production'
const isBuild = process.env.BUILD

export const styles = StyleSheet.create({
  document: {
    // display: 'flex',
    // flexDirection: 'column',
    width: '595px',
    height: '842px',
    // margin: 'auto',
    fontSize: '22px',
  },
  coverImage: {
    width: '595px',
    height: '838px',
    pageBreakAfter: 'always',
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/cover.png'" : "'/cover.png'"})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  },
  index: {
    width: '595px',
    height: '838px',
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/index.png'" : "'/index.png'"})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },
  fontIndex: {
    fontSize: '18px',
  },
  indexTitle: {
    paddingTop: '35px',
    paddingLeft: '98px',
    width: '461px',
    height: '65px',
    fontFamily: 'Titillium Web',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '1.1px',
    color: '#ffffff'
  },
  indexSubTitleLink: {
    color: '#23b2c6'
  },
  indexSubTitle: {
    // paddingLeft: '60px',
    fontFamily: 'Titillium Web',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.9px',
    color: '#23b2c6'
  },
  indexText: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0px',
    letterSpacing: '1px',
    color: '#ffffff'
  },
  logo: {
    paddingTop: '380px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '6s76px',
    height: '180px',
  },
  unstyleLink: {
    textDecoration: 'none',
  },
  coverTitle: {
    width: '295px',
    marginBottom: '0px',
    fontFamily: 'Titillium Web',
    fontSize: '33px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.9px',
    color: '#23b2c6',
    paddingTop: '424px',
    paddingLeft: '95px',
  },
  coverSubtitle: {
    width: '89px',
    height: '61px',
    fontFamily: 'Titillium Web',
    fontSize: '24px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#9ba7e0',
    paddingLeft: '101px',
    marginTop: '0px'
  },
  list: {
    listStyle: 'none',
    fontFamily: 'Roboto',
    paddingLeft: '30px',
    lineHeight: '1.43px',
    letterSpacing: '1px'
  },
  listContainer: {
    listStyle: 'none',
    paddingLeft: '98px',
  },
  documentWhitepaper: {
    pageBreakAfter: 'always',
    position: 'relative',
  },
  titleCover: {
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/title.png'" : "'/title.png'"})`,
    width: '595px',
    height: '68px',
  },
  resumeFirst: {
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.38',
    letterSpacing: '1px',
    color: '#4a4a4a',
  },
  resumeSecond: {
    fontFamily: 'Titillium Web',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '1',
    color: '#24b5a9',
  },
  resumeContainer: {
    marginLeft: '23px',
    marginRight: '22px',
    marginTop: '44px',
    width: '520px',
    height: '519px',
  },
  introductionContainer: {
    marginLeft: '26px',
    marginRight: '22px',
    marginTop: '44px',
    width: '520px',
    fontSize: '13px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.38',
    letterSpacing: '1px',
    color: '#4a4a4a',
    fontFamily: 'roboto'
  },
  bigNumber: {
    width: '49px',
    height: '27px',
    fontFamily: 'Titillium Web',
    fontSize: '50px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.36',
    letterSpacing: '1px',
    color: '#4a4a4a',
    marginBottom: '0px'
  },
  marginCrowdsale: {
    marginTop: '25px',
    marginBottom: '5px',
  },
  littleRectangle: {
    display: 'block',
    width: '18px',
    border: 'solid 1px #25b3d8',
  },
  bigRectangle: {
    position: 'relative',
    width: '595px',
    height: '142px',
    backgroundColor: 'rgba(216, 216, 216, 0.2)',
  },
  howWorkImage: {
    width: '540px',
    height: '225px',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    marginTop: '17px',
  },
  certificateProofLifeImage: {
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/ProofLifeCertificates.jpeg'" : "'/ProofLifeCertificates.jpeg'"})`,
  },
  cryptoNotariesImage: {
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/CryptoNotaries.jpeg'" : "'/CryptoNotaries.jpeg'"})`,
  },
  criptoNotaryLicenseImage: {
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/CriptoNotaryLicense.jpeg'" : "'/CriptoNotaryLicense.jpeg'"})`,
  },
  proofLifeValidatorImage: {
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/ProofLifeValidator.jpeg'" : "'/ProofLifeValidator.jpeg'"})`,
  },
  karbon14WalletImage: {
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/Karbon14Wallet.jpeg'" : "'/Karbon14Wallet.jpeg'"})`,
  },
  logoK14: {
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage:  `url(${isBuild === 'TRUE' ? "'file://"+__dirname+"/images/logo.png'" : "'/logo.png'"})`,
    height: '70px',
    width: '238px',
    position: 'absolute',
    left: '180px',
    top: '30px',
  },
  useBudgetContainer: {
    width: '595px',
    backgroundColor: 'rgba(216, 216, 216, 0.2)',
  },
  useBudgetDescription: {
    width: '430px',
    height: '143px',
    fontFamily: 'Titillium Web',
    fontSize: '14px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.43',
    letterSpacing: '1px',
    color: '#4a4a4a',
  },
  rectangleCommunity: {
    width: '11px',
    height: '11px',
    backgroundColor: '#321f93',
  },
  displayInline: {
    display: 'inline',
  },
  useBudgetFont: {
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.38',
    letterSpacing: '1px',
    color: '#4a4a4a',
  },
  introductionTextSecond: {
    fontFamily: 'Titillium Web',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '1.13',
    color: '#24b699',
  },
  paddingTop: {
    paddingTop: '30px',
  },
  title: {
    fontFamily: 'Titillium Web',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.1px',
    color: '#ffffff',
    paddingLeft: '70px',
    paddingTop: '20px',
  },
  subtitle: {
    fontFamily: 'Titillium Web',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '1.13',
    color: '#25b3dc',
  },
  subsubtitle: {
    fontFamily: 'Titillium Web',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '1.13',
  },
  massMediaContainer: {
    backgroundColor: '#f7f4f4',
    position: 'relative'
  },
  mediaTitleStyle: {
    position: 'absolute',
    left: '237px',
    bottom: '5px',
  },
  imageButerin: {
    width: '218px',
  },
  rectangle: {
    width: '520px',
    height: '4px',
    backgroundColor: '#26b3da',
    display: 'block',
  },  
  imageToken: {
    height: '100%',
    width: '100%',
    display: 'block',
    margin: '25px auto'
  },
  paddingBudgetUse: {
    paddingLeft: '21px',
    width: '550px',
  },
  tableToken: {
    width: '65%',
    borderCollapse: 'collapse',
    width: '550px',
    height: '186px',
  },
  tdLeftBorderTwo: {
    borderBottom: '2px solid #e3e9e9',
    textAlign: 'left',
  },
  tdRightBorderTwo: {
    borderBottom: '2px solid #e3e9e9',
    textAlign: 'right',
  },
  tdLeft: {
    borderBottom: '1px solid #e3e9e9',
    textAlign: 'left',
  },
  tdLeftWithoutBorder: {
    textAlign: 'left',
  },
  tdRight: {
    borderBottom: '1px solid #e3e9e9',
    textAlign: 'right',
  },
  tdRightWithoutBorder: {
    textAlign: 'right',
  },
  tableFont: {
    fontFamily: 'Titillium Web',
    fontSize: '14px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.14',
    letterSpacing: '0.8px',
    color: '#4a4a4a',
  },
  tableTitle: {
    fontWeight: 'bold',
    letterSpacing: '0.9px',
    fontFamily: 'Titillium Web',
    fontSize: '14px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.14',
    color: '#4a4a4a',
  }
})
