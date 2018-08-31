import { Link } from 'react-router-dom';
import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Col,
  ButtonGroup,
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
import MyVotes from './MyVotes.js'

// images
import FaTwitter from 'react-icons/lib/fa/twitter';
import TiMail from 'react-icons/lib/ti/mail';
import TiPrinter from 'react-icons/lib/ti/printer';
import FaFacebook from 'react-icons/lib/fa/facebook-official';
import IoBackArrow from 'react-icons/lib/io/ios-arrow-back';


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
      pressed: []
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
        const removeArr = remove.split(',');
        const removeIndex = this.indexGet(this.state.pressed, removeArr);
        pressed.splice(removeIndex, 1, arr);
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
              <ButtonGroup style={{ width: '100%' }}>
                <Candidates
                  candidates={y.candidates}
                  legislature={x.name}
                  district={y.name}
                  handleChange={this.handleChange}
                />
              </ButtonGroup>
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
      <div id='StateContainer' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse' }}>
        <Col className='noMarginCol' md='7'>
          <div className='funbox'>
            <p className='funboxTitle'>
              <Link className='active' to='/'>
                <IoBackArrow
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
        <Col className='noMarginCol votingColumn' style={{padding:0}} md='5'>
          <MyVotes
            ref={el => (this.componentRef = el)}
            pressed={this.state.pressed}
            legislatures={legislatures}
            stateName={stateName}
          />
          <p className='hintText text-muted' style={{ textAlign: 'center' }}>
            Learn more about our grading system{' '}
            <Link
              style={{ textDecoration: 'underline', color: 'inherit' }}
              className='active'
              to='/About'
            >
              here.
            </Link>
          </p>
          <div id='ShareSection'>
            {this.state.pressed.length === 0 ? (
              <br />
            ) : (
                <div lg='12' style={{ margin: 0, textAlign: 'center' }}>
                  <ReactToPrint
                    trigger={() => (
                      <TiPrinter className='printButton' size={22} color='#333' />
                    )}
                    content={() => this.componentRef}
                  />

                  <EmailShareButton
                    url='https://github.com'
                    subject={'My GunControlMap voting card'}
                    body={
                      'I filled out my Midterm Elections voting card at GunControlMap.com' +
                      shareQuote +
                      '\n'
                    }
                  >
                    <TiMail size={22} color='#333' />
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
                    <FaFacebook size={18} color='#3B5998' />
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
                    <FaTwitter size={18} color='#1DA1F2' />
                  </TwitterShareButton>
                </div>
              )}
          </div>
        </Col>
      </div>
    );
  }
}

export default State;