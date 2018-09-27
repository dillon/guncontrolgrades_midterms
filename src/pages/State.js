import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

// bootstrap
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Col,
  Table,
} from 'reactstrap';

// dictionary
import { stateInfo } from '../utils/stateInfo.js';

// components
import Candidates from '../components/Candidates.js';

// share buttons
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';

// print functionality
import ReactToPrint from 'react-to-print';

// icons
import { IconContext } from 'react-icons';
import { TiMail, TiPrinter } from 'react-icons/ti';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

// constants
import { colors } from '../utils/colors'
import { constants } from '../utils/constants'


const State = props => {
  // props: stateId
  const { id } = props.match.params;
  const newId = id.toUpperCase();
  return (
    <div className='pageContainer'>
      <StatePage stateId={newId} />
    </div>
  );
};


class StatePage extends React.Component { // State -> StatePage
  constructor(props) {
    super(props); // props: stateId
    this.state = {
      activeTab: 'usHouse',
      pressed: [],
      card: true,
      showHints: false
    };
  }

  componentDidMount() {
    this.hintDisplayTimer() // show hints
    this.setState({
      // set activeTab to whatever the first legislature is
      activeTab: stateInfo[this.props.stateId].legislatures[0].id
    });
  }

  hintDisplayTimer = () => {
    // timeout to show hints temporarily
    new Promise((resolve, reject) => {
      setTimeout(
        function () {
          document.addEventListener('mousedown', this.handleClickOutside);
          document.addEventListener('touchstart', this.handleClickOutside);
          document.addEventListener('touchmove', this.handleClickOutside);
          this.setState({ showHints: true })
        }.bind(this),
        100
      )
    }).then(
      setTimeout(
        function () {
          document.removeEventListener('mousedown', this.handleClickOutside);
          document.removeEventListener('touchstart', this.handleClickOutside);
          document.removeEventListener('touchmove', this.handleClickOutside);
          this.setState({ showHints: false })
        }.bind(this),
        2400
      )
    )
  }

  setWrapperRef = (node) => {
    // assign hint text ref
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    // handle clicks outside of hints
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        // dismiss hints
        showHints: false
      })
    }
  }

  handleChange = (type, selected, remove) => {
    // handle candidate checkbox click
    const { pressed } = this.state
    const incomingCandidateArray = selected.split(',');
    const index = this.getIndexOfState(pressed, incomingCandidateArray);

    switch (type) {
      case 'add':
        pressed.push(incomingCandidateArray);
        break;
      case 'delete':
        pressed.splice(index, 1);
        break;
      case 'change':
        pressed.splice(this.getIndexOfState(pressed, remove.split(',')), 1, incomingCandidateArray);
        break;
      default:
        console.log('switch defaulted');
        break;
    }
    this.setState({ pressed });
  }

  getIndexOfState = (pressed, incomingCandidateArray) => {
    // check this.state.pressed for new pressed
    for (var i = 0; i < pressed.length; i++) {
      let index = pressed[i].indexOf(incomingCandidateArray[3]);
      if (index > -1) {
        return +i;
      }
    }
  }

  toggle = (tab) => {
    // toggle tab for legislature
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleCard = () => {
    // toggle voting card popup (for mobile)
    this.setState({
      card: !this.state.card
    })
  }

  render() {
    const stateName = stateInfo[this.props.stateId].name;
    const legislatures = stateInfo[this.props.stateId].legislatures;

    const navTabs = stateInfo[this.props.stateId]['legislatures'].map(x => (
      // Nav Tabs (mapped) x = stateInfo.{stateId}.legislatures[i]
      <NavItem key={x.id}>
        <NavLink
          className={classnames({ active: this.state.activeTab === x.id })}
          onClick={() => { this.toggle(x.id) }}
        >
          {x.name}
        </NavLink>
      </NavItem>
    ));

    const tabPanes = legislatures.map(x => (
      // Tab Panes (mapped) x = stateInfo.{stateId}.legislatures[i]
      <TabPane key={x.id + 'tabpane'} tabId={x.id}>
        {x.districts.map(y => (
          // Candidates (mapped) x = stateInfo.{stateId}.legislatures[i]districts[i]
          <div key={y.name + 'district'}>
            <p style={Styles.districtNameInTabs}>
              {x.name} – {y.name}
            </p>
            <div className='candidatesContainer' style={Styles.candidatesContainer}>
              <Candidates
                candidates={y.candidates}
                legislature={x.name}
                district={y.name}
                handleChange={this.handleChange}
                handleClickOutside={this.handleClickOutside}
              />
            </div>
          </div>
        ))}
      </TabPane>
    ));

    const shareQuote = this.state.pressed.map(
      // Format Candidate metainfo for Voting Card
      y => '\n' + y[0] + y[1] === 'Statewide' ? '' : ' – ' + y[1] + ': ' + y[2] + ' (' + y[4] + ')'
    );

    return (
      <div id='StateContainer' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

        <div ref={this.setWrapperRef} id={this.state.showHints ? 'popupButtonHint' : 'popupButtonHintHidden'} style={Styles.popupButtonHint}>
          <div id='popupButtonHintArrow' style={Styles.popupButtonHintArrow} />
          Click here to view your voting card.
        </div>

        <button id='popupButton' style={Styles.popupButton} onClick={() => this.toggleCard()}>
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
                  // style={{ marginTop: 1 }}
                  color='#334858'
                  className='v-center'
                />
                <span className='funboxTitle v-center hiddenLink'>&nbsp;{stateName}</span>
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
                subject={`${constants.name} at ${constants.URLString}`}
                body={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}`
                  + '\n'
                  + shareQuote
                }
              >
                <TiMail id='shareMail' size={22 * 1.2} color='#333' />
              </EmailShareButton>

              <FacebookShareButton
                url={constants.URL}
                quote={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}`
                }
                hashtag={'#' + constants.nameNoSpaces}
              >
                <FaFacebook id='shareFacebook' size={18 * 1.2} color='#3B5998' />
              </FacebookShareButton>

              <TwitterShareButton
                url={constants.URL}
                title={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}`
                }
                hashtags={constants.hashtags}
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
                subject={`${constants.name} at ${constants.URLString}`}
                body={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}`
                  + '\n'
                  + shareQuote
                }
              >
                <TiMail size={22 * 1.2} color='#333' />
              </EmailShareButton>

              <FacebookShareButton
                url={constants.URL}
                quote={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}`
                }
                hashtag={'#' + constants.nameNoSpaces}
              >
                <FaFacebook size={18 * 1.2} color='#3B5998' />
              </FacebookShareButton>

              <TwitterShareButton
                url={constants.URL}
                title={
                  `I filled out my Midterm Elections voting card at ${constants.URLString}`
                }
                hashtags={constants.hashtags}
              >
                <FaTwitter id='shareTwitter' size={18 * 1.2} color='#1DA1F2' />
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
      <tr key={y[3] + 'votes'}>
        <td>
          <img style={Styles.cardImage} src={y[3]} alt={y[2]} />
        </td>
        <td style={{ lineHeight: '1.2' }}>
          <div className='text-muted hintText'>
            {y[0]}{y[1] === 'Statewide' ? '' : ' - ' + y[1]}
          </div>
          <div style={Styles.cardName}>
            {y[2]} ({y[4] === 'Republican' || y[4] === 'Democrat' || y[4] === 'Green' || y[4] === 'Libertarian' ? y[4][0] : 'I'})
          </div>
          <div style={Styles.cardGrade}>
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

const Styles = {
  candidatesContainer: {
    width: '100%',
    display: 'grid',
    // gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: 10,
    gridRowGap: 10
    // gridGap: '10px',
    // gridAutoRows: 'minMax(100px, auto)'
  },
  districtNameInTabs: {
    marginTop: 30,
    marginBottom: 8,
    fontSize: 16,
  },
  cardImage: {
    width: 41,
    height: 53,
    borderRadius: 4,
    border: `1px solid grey`,
    marginTop: 3,
    marginBottom: 3,
  },
  cardName: {
    fontSize: '.9rem'
  },
  cardGrade: {
    fontSize: '1.1rem',
    fontWeight: 600,
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
}
export default State;
