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
