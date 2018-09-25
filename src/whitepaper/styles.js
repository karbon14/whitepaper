import { StyleSheet } from '@react-pdf/react-pdf'
const isBuild = process.env.BUILD === 'true' ? true : false

export const styles = StyleSheet.create({
  positionListIndex: {
    marginLeft: '130px',
    marginTop: '42px',
  },
  indexTitle: {
    paddingTop: '46px',
    paddingLeft: '131px',
    fontFamily: 'Titillium Web',
    fontSize: '30px',
    fontWeight: 'bold',
    letterSpacing: '1.1px',
    color: '#FFF',
    margin: 0,
  },
  bigRectangle: {
    position: 'relative',
    width: '100%',
    height: '185px',
    backgroundColor: 'rgba(216, 216, 216, 0.2)',
    marginBottom: '-28px',
  },
  logoK14: {
    backgroundSize: '378px 88px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${isBuild ? "'file://" + __dirname + "/images/logo.png'" : "'/logo.png'"})`,
    height: '100%',
    backgroundPosition: 'center',
  },
  useBudgetContainer: {
    margin: '0 auto',
    padding: '45px 30px 0px 30px',
    backgroundColor: 'rgba(216, 216, 216, 0.2)',
    height: '185px',
  },
  useBudgetProvisionContainer: {
    height: '15px',
    margin: '0 auto',
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
  useBudgetDescriptionContainer: {},
  useBudgetDescriptionTextContainer: {
    marginTop: '15px',
    maxWidth: '75%',
    float: 'left',
  },
  useBudgetDescription: {
    fontFamily: 'Titillium Web',
    fontSize: '19px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.43',
    letterSpacing: '1px',
    color: '#4a4a4a',
    margin: '0px',
  },
  useBudgetLabelsContainer: {
    width: '20%',
    marginTop: '15px',
    float: 'right',
  },
  useBudgetLabelsContainerList: {
    listStyle: 'none',
    float: 'left',
    width: '100%',
  },
  useBudgetLabelsList: {
    display: 'block',
    marginBottom: '5px',
    width: '100%',
  },
  rectangleCommunity: {
    width: '15px',
    height: '15px',
    backgroundColor: '#321f93',
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
    fontFamily: 'Titillium Web',
    fontSize: '15px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.46',
    color: '#4a4a4a',
    margin: '0px',
  },
  tableToken: {
    borderCollapse: 'collapse',
    width: '100%',
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
    fontSize: '18px',
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
    fontSize: '19px',
    lineHeight: '2.14',
    color: '#4a4a4a',
  },
})
