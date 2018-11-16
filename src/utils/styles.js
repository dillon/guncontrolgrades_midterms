import { colors } from './colors'
import { constants } from '../utils/constants';

export const NavHeader = {
  navbar: {
    backgroundColor: colors.primary,
    maxWidth: 1100,
    margin: 'auto',
  },
  navbarContainer: { backgroundColor: colors.primary },
  navLink: { fontSize: '.9rem' },
  navbarBrand: { marginTop: -1 }
}

export const MyVotes = {
  cardImage: {
    width: constants.imageWidth / 2.2,
    height: constants.imageHeight / 2.2,
    borderRadius: 2,
    border: `1px solid grey`,
    marginTop: 3,
    marginBottom: 3,
  },
  cardName: { fontSize: '.9rem' },
  cardGrade: {
    fontSize: '1.1rem',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 600,
    // color: colors.primary
    color: colors.red,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',

  }
}

export const State = {
  candidatesContainer: {
    width: '100%',
    display: 'grid',
    gridColumnGap: 10,
    gridRowGap: 10
  },
  districtNameInTabs: {
    marginTop: 30,
    marginBottom: 8,
    fontSize: 16,
  },
  popupButtonHint: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    bottom: (10 + 55) + 15,
    right: (10) + 5,
    borderRadius: '3px',
    backgroundColor: 'white',
    zIndex: 2,
  },
  popupButtonHintArrow: {
    bottom: '-10px',
    right: 15,
    border: '5px solid white',
    content: '',
    position: 'absolute',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    borderLeftColor: 'transparent'
  },
  popupButton: {
    cursor: 'pointer',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    border: '1px solid rgba(0,0,0,0)',
    bottom: 10,
    right: 10,
    borderRadius: '50%',
    zIndex: 2,
    backgroundColor: colors.primaryLight
  },
  hintAsterisk: {
    // fontSize: '2.0rem',
    // fontFamily: 'Open Sans, sans-serif',
    // fontWeight: 600,
    // color: colors.primaryHighOpacity,
    // marginTop: 13
    marginBottom: 2,
    float: 'left'
  }


}

export const Candidates = {
  candidateCard: {
    height: constants.imageHeight,
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    transition: '.1s',
    WebkitTransition: '.1s',
    maxWidth: 288,
  },
  candidateCardSelected: {
    backgroundColor: colors.primaryLowOpacity,
    color: colors.primaryDark,
    height: constants.imageHeight,
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    border: `1px solid ${colors.primaryMediumOpacity}`,
    transition: '.1s',
    WebkitTransition: '.1s',
    maxWidth: 288,
  },
  candidateCardDisabled: {
    backgroundColor: colors.disabled,
    color: colors.primaryDark,
    height: constants.imageHeight,
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    border: `1px solid ${colors.primaryMediumOpacity}`,
    transition: '.1s',
    WebkitTransition: '.1s',
    maxWidth: 288,
    cursor: 'default !important',
    opacity: .35,
    backgroundImage: 'linear-gradient(45deg, #c9c9cf 25%, transparent 25%, transparent 50%, #c9c9cf 50%, #c9c9cf 75%, transparent 75%, transparent)',
    backgroundSize: '5px 5px'
  },
  candidateImage: {
    height: constants.imageHeight,//130,
    width: constants.imageWidth,
  },
  candidateInfo: {
    padding: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  candidateName: {
    fontSize: '1rem',
    lineHeight: 1.2,
  },
  candidateNameAlternative: {
    color: 'grey',
    fontSize: '.8rem',
    fontWeight: 'normal',
  },
  candidateNameAlternativeSelected: {
    color: colors.primary,
    fontSize: '.8rem',
    fontWeight: 'normal',
  },
  candidateGrade: {
    fontSize: '1.7rem',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 600,
    // color: colors.primary,
    color: colors.red
  },
  candidateGradeAndCheck: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  candidateCheckboxActive: {
    color: 'white',
    backgroundColor: colors.primary,
    borderRadius: '50%',
    width: 35,
    height: 35,
    border: `1px solid ${colors.primary}`,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // delete below to get rid of button animation
    transition: '.1s',
    WebkitTransition: '.1s',
  },
  candidateCheckbox: {
    color: colors.primary,
    backgroundColor: 'rgba(0,0,0,0)',
    width: 60,
    height: 35,
    borderRadius: 3,
    border: `1px solid ${colors.primary}`,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // delete below to get rid of button animation
    transition: '.1s',
    WebkitTransition: '.1s',
    // delete below to enable buttons
    // backgroundImage: 'linear-gradient(45deg, #c9c9cf 25%, transparent 25%, transparent 50%, #c9c9cf 50%, #c9c9cf 75%, transparent 75%, transparent)',
    // backgroundSize: '5px 5px',
    cursor: 'default'
  },
  candidateCheckboxWon: {
    color: colors.primary,
    backgroundColor: 'rgba(0,0,0,0)',
    width: 60,
    height: 35,
    borderRadius: 3,
    border: `1px solid ${colors.primary}`,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // delete below to get rid of button animation
    transition: '.1s',
    WebkitTransition: '.1s',
    // delete below to enable buttons
    backgroundImage: 'linear-gradient(45deg, #c9c9cf 25%, transparent 25%, transparent 50%, #c9c9cf 50%, #c9c9cf 75%, transparent 75%, transparent)',
    backgroundSize: '5px 5px',
    opacity: .35,
    cursor: 'default'
  },
  buttonContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  }
}

export const Map = {
  landingLogo: {
    background: `linear-gradient(${colors.primary} 24%, ${colors.primaryDark} 168%)`,
    backgroundColor: colors.primary, //fallback
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landingFullName: {
    marginTop: 0,
    paddingLeft: 3,
    fontWeight: 200,
    opacity: '.65',
    color: 'white',
    letterSpacing: .7
  },
  landingDescription: {
    maxWidth: 400,
    paddingBottom: 40,
    paddingTop: 15,
    // lineHeight: 1.5, // my style
    lineHeight: 1.25,
    textAlign: 'center',
    fontWeight: 300,
    color: 'white',
    opacity: .9
  },
  dropdownMenu: {
    height: 'auto',
    maxHeight: 250,
    overflowX: 'hidden'
  },
  hintText: { paddingBottom: 30 },
  svg: {
    width: '102%',
    height: '100%',
    overflow: 'hidden',
    maxWidth: 950,
    margin: 'auto',
  }
}