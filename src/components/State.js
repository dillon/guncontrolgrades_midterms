import { Link } from 'react-router-dom';
import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Col,
  Table,
} from 'reactstrap';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';
import classnames from 'classnames';
import ReactToPrint from 'react-to-print';

// dictionary
import { stateInfo } from '../dictionaries/stateInfo.js';

// other components
import Candidates from './Candidates.js'
// import MyVotes from './MyVotes.js'

// icons
import { IconContext } from 'react-icons';
import { TiMail, TiPrinter } from 'react-icons/ti';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoIosArrowBack, IoMdCheckboxOutline, IoIosArrowUp, IoIosArrowDown, IoIosArrowDropupCircle } from 'react-icons/io';

// colors
import { colors } from '../utils/colors'
import { constants } from '../utils/constants'

// State
const State = props => {
  // props: stateId
  const { id } = props.match.params;
  const newId = id.toUpperCase();
  return (
    <div className='pageContainer'>
      <StateContainer stateId={newId} />
    </div>
  );
};

// State > StateContainer
class StateContainer extends React.Component {
  constructor(props) {
    super(props); // props: stateId
    this.state = {
      activeTab: 'usHouse',
      pressed: [],
      card: true,
      showHints: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  hintTimeoutShow() {
    new Promise((resolve, reject) => {
      setTimeout(
        function () {
          document.addEventListener('mousedown', this.handleClickOutside);
          document.addEventListener('touchstart', this.handleClickOutside);
          document.addEventListener('touchmove', this.handleClickOutside);
          this.setState({ showHints: true })
        }
          .bind(this),
        100
      )
    }).then(this.hintTimeoutHide())
  }

  hintTimeoutHide() {
    setTimeout(
      function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('touchstart', this.handleClickOutside);
        document.removeEventListener('touchmove', this.handleClickOutside);
        this.setState({ showHints: false })
      }
        .bind(this),
      2400
    );
  }
  async componentDidMount() {
    // set activeTab to whatever the first legislature is, in case usHouse is not up for election in this state
    await this.hintTimeoutShow()
    this.setState({
      activeTab: stateInfo[this.props.stateId].legislatures[0].id
    });
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        showHints: false
      })
    }
  }
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  indexGet(pressed, arr) {
    for (var i = 0; i < pressed.length; i++) {
      let index = pressed[i].indexOf(arr[3]);
      if (index > -1) {
        return +i;
      }
    }
  }

  handleChange(type, selected, remove) {
    const arr = selected.split(',');
    const index = this.indexGet(this.state.pressed, arr);
    const pressed = this.state.pressed;

    switch (type) {
      case 'add':
        pressed.push(arr);
        break;
      case 'delete':
        pressed.splice(index, 1);
        break;
      case 'change':
        // const removeIndex = this.indexGet(this.state.pressed, remove.split(','));
        pressed.splice(this.indexGet(this.state.pressed, remove.split(',')), 1, arr);
        break;
      default:
        console.log('switch defaulted');
        break;
    }
    this.setState({ pressed: pressed });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleCard() {
    if (this.state.card) {
      this.setState({
        card: false
      })
    }
    else {
      this.setState({
        card: true
      })
    }
  }

  render() {
    const stateName = stateInfo[this.props.stateId].name;
    const legislatures = stateInfo[this.props.stateId].legislatures;

    // Nav Tabs
    const navTabs = stateInfo[this.props.stateId]['legislatures'].map(x => (
      // x = stateInfo.{stateId}.legislatures[i]
      <NavItem key={x.id}>
        <NavLink
          className={classnames({
            active: this.state.activeTab === x.id
          })}
          onClick={() => {
            this.toggle(x.id);
          }}
        >
          {x.name}
        </NavLink>
      </NavItem>
    ));

    // Tab Panes
    const tabPanes = legislatures.map(x => (
      // x = stateInfo.{stateId}.legislatures[i]
      <TabPane key={x.id + 'tabpane'} tabId={x.id}>
        {x.districts.map(y => (
          // x = stateInfo.{stateId}.legislatures[i]districts[i]
          <div key={y.name + 'district'}>
            <p style={districtNameInTabs}>
              {x.name} – {y.name}
            </p>
            <div>
              <div className='candidatesContainer' style={candidatesContainer}>
                <Candidates
                  candidates={y.candidates}
                  legislature={x.name}
                  district={y.name}
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        ))}
      </TabPane>
    ));

    // Format Candidate metainfo for Voting Card
    const shareQuote = this.state.pressed.map(
      y => '\n' + y[0] + ' – ' + y[1] + ': ' + y[2] + ' (' + y[4] + ')'
    );

    return (
      <div id='StateContainer' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

        <div ref={this.setWrapperRef} id={this.state.showHints ? 'scrollToTopHint' : 'scrollToTopHintHidden'} style={scrollToTopHint}>
          <div id='scrollToTopHintArrow' style={scrollToTopHintArrow} />
          Click here to view your voting card.
        </div>

        <button id='scrollToTop' style={scrollToTop} onClick={() => this.toggleCard()}>
          <IconContext.Provider value={{ color: colors.primary, size: '2.2em', className: 'global-class-name' }}>
            {
              this.state.card ?
                <div style={{ paddingBottom: 4 }}>
                  <IoIosArrowUp />
                </div>
                :
                <div style={{ paddingTop: 4 }}>
                  <IoIosArrowDown />
                </div>
            }
          </IconContext.Provider>
        </button>

        <Col className='noMarginCol' md='7'>
          <div className='funbox funboxBorder'>
            <p className='funboxTitle'>
              <Link className='active' to='/'>
                <IoIosArrowBack
                  size={18}
                  style={{ marginTop: 1 }}
                  color='#334858'
                  className='v-center'
                />
                <span style={stateTitle} className='v-center hiddenLink'>&nbsp;{stateName}</span>
              </Link>
            </p>
            <div className='clearfix' style={{ paddingRight: '30rem' }}>
              <div />
            </div>
            <Nav pills tabs>
              {navTabs}
            </Nav>
            <div className='clearfix' style={{ paddingRight: '30rem' }}>
              <div />
            </div>
            <TabContent className='TabContent' style={{ width: '100%' }} activeTab={this.state.activeTab}>
              {tabPanes}
            </TabContent>
          </div>
        </Col>
        <Col className='noMarginCol votingColumn' style={{ padding: 0 }} md='5'>
          <MyVotes
            id={this.state.card ? 'votingCardHide' : 'votingCard'}
            ref={el => (this.componentRef = el)}
            pressed={this.state.pressed}
            legislatures={legislatures}
            stateName={stateName}
            card={this.state.card}
          />
          <MyVotes
            id='secondVotingCard'
            ref={el => (this.componentRef2 = el)}
            pressed={this.state.pressed}
            legislatures={legislatures}
            stateName={stateName}
            card={this.state.card}
          />

          <p id='learnMore' className='hintText text-muted' style={{ textAlign: 'center' }}>
            Learn more about our grading system{' '}
            <Link
              style={{ textDecoration: 'underline', color: 'inherit' }}
              className='active'
              to='/About'
            >
              here.
            </Link>
          </p>
          <div id={this.state.card ? 'ShareSectionHide' : 'ShareSection'}>
            <div lg='12' style={{ margin: 0, textAlign: 'center' }}>
              <span class='sharePrint'>
                <ReactToPrint
                  trigger={() => (
                    <TiPrinter className='printButton' size={22 * 1.2} color='#333' />
                  )}
                  content={() => this.componentRef}
                />
              </span>

              <EmailShareButton
                url={constants.URL}
                subject={`My ${constants.nameNoSpaces} voting card`}
                body={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}` +
                  shareQuote +
                  '\n'
                }
              >
                <TiMail id='shareMail' size={22 * 1.2} color='#333' />
              </EmailShareButton>

              <FacebookShareButton
                url={constants.URL}
                quote={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}` +
                  shareQuote +
                  '\n'
                }
                hashtag={'#' + constants.nameNoSpaces}
              >
                <FaFacebook id='shareFacebook' size={18 * 1.2} color='#3B5998' />
              </FacebookShareButton>

              <TwitterShareButton
                url={constants.URL}
                title={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}` +
                  shareQuote +
                  '\n'
                }
                hashtags={[
                  constants.nameNoSpaces,
                  'GunControl',
                  'GunRegulation',
                  'Midterms'
                ]}
              >
                <FaTwitter id='shareTwitter' size={18 * 1.2} color='#1DA1F2' />
              </TwitterShareButton>
            </div>
          </div>
          <div id='secondShareSection'>
            <div lg='12' style={{ margin: 0, textAlign: 'center' }}>
              <span class='sharePrint'>
                <ReactToPrint
                  trigger={() => (
                    <TiPrinter className='printButton' size={22 * 1.2} color='#333' />
                  )}
                  content={() => this.componentRef2}
                />
              </span>

              <EmailShareButton
                url={constants.URL}
                subject={`My ${constants.nameNoSpaces} voting card`}
                body={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}` +
                  shareQuote +
                  '\n'
                }
              >
                <TiMail size={22 * 1.2} color='#333' />
              </EmailShareButton>

              <FacebookShareButton
                url={constants.URL}
                quote={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}` +
                  shareQuote +
                  '\n'
                }
                hashtag={'#' + constants.nameNoSpaces}
              >
                <FaFacebook size={18 * 1.2} color='#3B5998' />
              </FacebookShareButton>

              <TwitterShareButton
                url={constants.URL}
                title={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}` +
                  shareQuote +
                  '\n'
                }
                hashtags={[
                  constants.nameNoSpaces,
                  'GunControl',
                  'GunRegulation',
                  'Midterms'
                ]}
              >
                <FaTwitter size={18 * 1.2} color='#1DA1F2' />
              </TwitterShareButton>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}


// State > StateContainer > MyVotes
class MyVotes extends React.Component {
  render() {
    const votes = this.props.pressed.map(y => (
      <tr style={cardRow} key={y[3] + 'votes'}>
        <td>
          <img style={cardImage} src={y[3]} alt={y[2]} />
        </td>
        <td style={{ lineHeight: '1.2' }}>
          <div className='text-muted hintText'>
            {y[0]}{y[1]==='Statewide' ? '' : ' - ' + y[1]}
          </div>
          <div style={cardName}>
            {y[2]} ({y[4] === 'Republican' || y[4] === 'Democrat' || y[4] === 'Green' || y[4] === 'Libertarian' ? y[4][0] : 'I'})
          </div>
          <div style={cardGrade}>
            {y[5]}
          </div>
        </td>
      </tr>
    ));

    return (
      <div style={{ maxWidth: 500, width: '100%', margin: 'auto' }}>
        {/* <div className='votingCardSpacer' /> */}
        <div id={this.props.id}>
          <p style={{ width: '100%' }} className='smallCaps'>
            MY {this.props.stateName.toUpperCase()} VOTING CARD
          </p>
          <div className='tableDiv'>
            <Table id='votesList' flush>
              <tbody>
                {this.props.pressed.length === 0 ? (
                  <div className='text-muted' style={{ fontSize: '.8rem' }}>
                    <em>Select a candidate to add them to your voting card.</em>
                  </div>
                ) : (
                    votes
                  )}
              </tbody>
            </Table>
          </div>
          <div style={{ width: '100%' }}>
            <div
              style={{ position: 'relative', bottom: 0, textAlign: 'center' }}
              className='hintText text-muted'
            >
              created on guncontrolgrades.com
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const candidatesContainer = {
  width: '100%',
  display: 'grid',
  // gridTemplateColumns: 'repeat(2, 1fr)',
  gridColumnGap: 10,
  gridRowGap: 10
  // gridGap: '10px',
  // gridAutoRows: 'minMax(100px, auto)'
}

const scrollToTop = {
  cursor: 'pointer',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // border: `1px solid ${colors.primary}`,
  width: 55,
  height: 55,
  border: '1px solid rgba(0,0,0,0)',
  // right: window.innerHeight - 100,
  // top: window.innerWidth - 100
  bottom: 10,
  right: 10,
  borderRadius: '50%',
  zIndex: 2,
  backgroundColor: colors.primaryLight
}

const scrollToTopHint = {
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
}
const scrollToTopHintArrow = {
  bottom: '-10px',
  right: 15,
  border: '5px solid white',
  content: '',
  position: 'absolute',
  borderBottomColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: 'white',
  borderLeftColor: 'transparent'
}
const stateTitle = {
  fontSize: 18,
  fontWeight: 500,
}

const districtNameInTabs = {
  marginTop: 15,
  marginBottom: 5,
  fontSize: 16,
}

const cardImage = {
  width: 41,
  height: 53,
  borderRadius: 4,
  border: `1px solid grey`,
  marginTop: 3,
  marginBottom: 3,
}

const cardName = {
  fontSize: '.9rem'
}

const cardGrade = {
  fontSize: '1.1rem',
  fontWeight: 600,
}

const cardParty = {
  fontSize: '.7rem'
}

const cardRow = {
}
export default State;