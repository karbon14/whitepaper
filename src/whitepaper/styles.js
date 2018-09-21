import { StyleSheet } from '@react-pdf/react-pdf'
const isBuild = process.env.BUILD

export const styles = StyleSheet.create({
  document: {
    width: '595px',
  },
  coverImage: {
    height: '838px',
    pageBreakAfter: 'always',
    backgroundImage: `url(${isBuild === 'TRUE' ? "'file://" + __dirname + "/images/cover.png'" : "'/cover.png'"})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },
  index: {
    height: '838px',
    backgroundImage: `url(${isBuild === 'TRUE' ? "'file://" + __dirname + "/images/index.png'" : "'/index.png'"})`,
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
    color: '#ffffff',
  },
  indexSubTitleLink: {
    color: '#23b2c6',
  },
  indexSubTitle: {
    fontFamily: 'Titillium Web',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.9px',
    color: '#23b2c6',
  },
  indexText: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0px',
    letterSpacing: '1px',
    color: '#ffffff',
  },
  logo: {
    paddingTop: '380px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '676px',
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
    marginTop: '0px',
  },
  list: {
    listStyle: 'none',
    fontFamily: 'Roboto',
    paddingLeft: '30px',
    lineHeight: '1.43px',
    letterSpacing: '1px',
  },
  listContainer: {
    listStyle: 'none',
    paddingLeft: '98px',
  },
  documentWhitepaper: {
    height: '832px',
    pageBreakAfter: 'always',
    position: 'relative',
  },
  footer: {
    position: 'absolute',
    right: '33px',
    bottom: '0px',
  },
  footerFrom: {
    fontFamily: 'Titillium Web',
    fontSize: '12px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#231994',
  },
  footerFromWhite: {
    fontFamily: 'Titillium Web',
    fontSize: '12px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#ffffff'
  },
  colorWhite: {
    color: '#ffffff'
  },
  footerTo: {
    fontWeight: '300',
  },
  colorFooterTo: {
    color: '#9ba7e0'
  },
  titleCover: {
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${isBuild === 'TRUE' ? "'file://" + __dirname + "/images/title.png'" : "'/title.png'"})`,
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
  pageContainer: {
    paddingLeft: '26px',
    paddingRight: '25px',
    paddingTop: '44px',
    width: '530px',
    fontSize: '13px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.38',
    letterSpacing: '1px',
    color: '#4a4a4a',
    fontFamily: 'roboto',
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
    marginBottom: '0px',
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
    backgroundImage: `url(${
      isBuild === 'TRUE'
        ? "'file://" + __dirname + "/images/ProofLifeCertificates.jpeg'"
        : "'/ProofLifeCertificates.jpeg'"
    })`,
  },
  cryptoNotariesImage: {
    backgroundImage: `url(${
      isBuild === 'TRUE' ? "'file://" + __dirname + "/images/CryptoNotaries.jpeg'" : "'/CryptoNotaries.jpeg'"
    })`,
  },
  criptoNotaryLicenseImage: {
    backgroundImage: `url(${
      isBuild === 'TRUE' ? "'file://" + __dirname + "/images/CriptoNotaryLicense.jpeg'" : "'/CriptoNotaryLicense.jpeg'"
    })`,
  },
  proofLifeValidatorImage: {
    backgroundImage: `url(${
      isBuild === 'TRUE' ? "'file://" + __dirname + "/images/ProofLifeValidator.jpeg'" : "'/ProofLifeValidator.jpeg'"
    })`,
  },
  karbon14WalletImage: {
    backgroundImage: `url(${
      isBuild === 'TRUE' ? "'file://" + __dirname + "/images/Karbon14Wallet.jpeg'" : "'/Karbon14Wallet.jpeg'"
    })`,
  },
  logoK14: {
    backgroundSize: '283px 70px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${isBuild === 'TRUE' ? "'file://" + __dirname + "/images/logo.png'" : "'/logo.png'"})`,
    height: '100%',
    backgroundPosition: 'center',
  },
  useBudgetContainer: {
    width: 'calc(100% - 44px)',
    marginBottom: '22px',
    padding: '35px 22px 22px 22px',
    backgroundColor: 'rgba(216, 216, 216, 0.2)',
  },
  useBudgetProvisionContainer: {
    width: '100%',
    height: '10px',
    display: '-webkit-box',
  },
  useBudgetProvisionFirst: {
    backgroundColor: '#321f93',
    width: '50%',
    height: '100%',
  },
  useBudgetProvisionSecond: {
    backgroundColor: '#6c5fb0',
    width: '30%',
    height: '100%',
  },
  useBudgetProvisionThird: {
    backgroundColor: '#c5c1de',
    width: '10%',
    height: '100%',
  },
  useBudgetProvisionFourth: {
    backgroundColor: '#d8d6e7',
    width: '7%',
    height: '100%',
  },
  useBudgetProvisionFifth: {
    backgroundColor: '#e8e7f0',
    width: '3%',
    height: '100%',
  },
  useBudgetDescriptionContainer: {
    display: '-webkit-box',
  },
  useBudgetDescriptionTextContainer: {
    marginTop: '15px',
    minWidth: '70%',
    maxWidth: '70%',
  },
  useBudgetDescription: {
    minHeight: '80px',
    fontFamily: 'Titillium Web',
    fontSize: '14px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.43',
    letterSpacing: '1px',
    color: '#4a4a4a',
    margin: '0px',
  },
  useBudgetLabelsContainer: {
    width: '30%',
    marginTop: '15px',
  },
  useBudgetLabelsContainerList: {
    listStyle: 'none',
    padding: 'inherit',
    margin: '0px',
    paddingLeft: '10px',
  },
  useBudgetLabelsList: {
    width: '100%',
    height: '17px',
    float: 'left',
  },
  rectangleCommunity: {
    width: '11px',
    height: '11px',
    backgroundColor: '#321f93',
    display: 'block',
    lineHeight: '1.38',
    margin: '3px 5px 3px 0',
    float: 'left',
  },
  useBudgetFontValue: {
    margin: '0px',
    textAlign: 'left',
  },
  rectangleCommunityValueFirst: {
    backgroundColor: '#321f93',
  },
  rectangleCommunityValueSecond: {
    backgroundColor: '#6c5fb0',
  },
  rectangleCommunityValueThird: {
    backgroundColor: '#c5c1de',
  },
  rectangleCommunityValueFourth: {
    backgroundColor: '#d8d6e7',
  },
  rectangleCommunityValueFifth: {
    backgroundColor: '#e8e7f0',
  },
  useBudgetItem: {
    marginTop: '10px',
  },
  useBudgetFont: {
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.46',
    letterSpacing: '1px',
    color: '#4a4a4a',
    margin: '0px',
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
    height: '230px',
    backgroundColor: '#f7f4f4',
    position: 'relative',
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
    margin: '25px auto',
  },
  paddingTopZero: {
    paddingTop: '0px',
  },
  tableToken: {
    borderCollapse: 'collapse',
    width: '530px',
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
  },
})
