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
import { colors } from '../utils/colors.js'

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
      card: true
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    // set activeTab to whatever the first legislature is, in case usHouse is not up for election in this state
    this.setState({
      activeTab: stateInfo[this.props.stateId].legislatures[0].id
    });
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
            <p className='districtNameInTabs'>
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

        <button id="scrollToTop" style={scrollToTop} onClick={() => this.toggleCard()}>
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
          <div className='funbox'>
            <p className='funboxTitle'>
              <Link className='active' to='/'>
                <IoIosArrowBack
                  size={18}
                  style={{ marginTop: 1 }}
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
            ref={el => (this.componentRef = el)}
            pressed={this.state.pressed}
            legislatures={legislatures}
            stateName={stateName}
            card={this.state.card}
          />
          <p id="learnMore" className='hintText text-muted' style={{ textAlign: 'center' }}>
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
              <span id="sharePrint">
                <ReactToPrint
                  trigger={() => (
                    <TiPrinter className='printButton' size={22 * 1.2} color='#333' />
                  )}
                  content={() => this.componentRef}
                />
              </span>

              <EmailShareButton
                url='https://github.com'
                subject={'My GunControlMap voting card'}
                body={
                  'I filled out my Midterm Elections voting card at GunControlMap.com' +
                  shareQuote +
                  '\n'
                }
              >
                <TiMail id="shareMail" size={22 * 1.2} color='#333' />
              </EmailShareButton>

              <FacebookShareButton
                url='https://github.com'
                quote={
                  'I filled out my Midterm Elections voting card at GunControlMap.com' +
                  shareQuote +
                  '\n'
                }
                hashtag='#GunControlMap'
              >
                <FaFacebook id="shareFacebook" size={18 * 1.2} color='#3B5998' />
              </FacebookShareButton>

              <TwitterShareButton
                url='https://github.com'
                title={
                  'I filled out my Midterm Elections voting card at GunControlMap.com' +
                  shareQuote +
                  '\n'
                }
                hashtags={[
                  'GunControlMap',
                  'GunControl',
                  'GunRegulation',
                  'Midterms'
                ]}
              >
                <FaTwitter id="shareTwitter" size={18 * 1.2} color='#1DA1F2' />
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
      <tr className='votes' key={y[3] + 'votes'}>
        <td>
          <img src={y[3]} alt={y[2]} />
        </td>
        <td style={{ lineHeight: '1.2' }}>
          <span className='text-muted hintText'>
            {y[0]} – {y[1]}
          </span>
          <br />
          {y[2]}
          <br />
          ({y[4]}) – {y[5]}
        </td>
      </tr>
    ));

    return (
      <div style={{ maxWidth: 500, width: '100%', margin: 'auto' }}>
        {/* <div className='votingCardSpacer' /> */}
        <div id={this.props.card ? 'votingCardHide' : 'votingCard'}>
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

export default State;