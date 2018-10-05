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
} from 'reactstrap';

// components
import Candidates from '../components/Candidates.js';
import MyVotes from '../components/MyVotes'

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
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { MdPlaylistAddCheck } from 'react-icons/md';

// constants
import { colors } from '../utils/colors'
import { constants } from '../utils/constants'

// styles
import { State as Styles } from '../utils/styles'

// dictionary
// import { stateInfo } from '../utils/stateInfo.js';
import { stateInfo } from '../utils/computatedGrades.js';


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

    const shareQuote =
      '\n\n'
      + stateName
      + this.state.pressed.map(
        // Format Candidate metainfo for Voting Card
        y => {
          const legislature = y[0]
          const district = y[1]
          const name = y[2]
          const party = y[4]
          const grade = y[5]
          const endorsed = y[6]
          return (
            '\n\n'
            + `${legislature} – ${district}\n`
            + `${name} (${party})\n`
            + `Grade: ${grade}${endorsed === 'true' ? '*' : ''}`
          )
        }).join(' ');

    return (
      <div id='StateContainer' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

        <div ref={this.setWrapperRef} id={this.state.showHints ? 'popupButtonHint' : 'popupButtonHintHidden'} style={Styles.popupButtonHint}>
          <div id='popupButtonHintArrow' style={Styles.popupButtonHintArrow} />
          Click here to view your voting card.
        </div>

        <button id='popupButton' style={Styles.popupButton} onClick={() => this.toggleCard()}>
          <IconContext.Provider value={{ color: colors.primary, size: '1.9em', className: 'global-class-name' }}>
            {
              this.state.card ?
                <div style={{ paddingBottom: 0, paddingLeft: 4 }}>
                  <MdPlaylistAddCheck />
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
                <span className='v-center hiddenLink'>&nbsp;{stateName}</span>
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
            // ref={el => (this.componentRef = el)}
            pressed={this.state.pressed}
            legislatures={legislatures}
            stateName={stateName}
            card={this.state.card}
          />

          <p id='learnMore' className='hintText text-muted' style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}>
              <div style={Styles.hintAsterisk}>*</div><div>&nbsp;indicates an endorsement by Giffords.org</div>
            </div>
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
              <span className='sharePrint'>
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
              <span className='sharePrint'>
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
      </div >
    );
  }
}

export default State;
