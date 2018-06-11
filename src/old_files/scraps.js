  <TumblrShareButton
    url="https://github.com"
    title={
      "I filled out my Midterm Elections voting card at GunControlMap.com"
    }
    tags={[
      "GunControlMap",
      "GunControl",
      "GunRegulation",
      "Midterms"
    ]}
    description={"" + shareQuote + "\n"}
  >
    <FaTumblr size={18} color="35465c" />
  </TumblrShareButton>







// State
const State = props => {
  // props: stateId
  const { stateId } = props.match.params;
  const { stateName } = stateInfo[props.stateId].name;
  return (
    <div id="State">
      <div className="stateHeaderContainer">
        <h3>{stateName}</h3>
        <hr />
      </div>
      <div className="stateBodyContainer">
        <NavAndPanesAndVotingCard stateId={stateId} />
      </div>
    </div>
  );
};

// State > NavAndPanesAndVotingCard
class NavAndPanesAndVotingCard extends React.Component {
  // props: stateId
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "0",
      onLoad: true,
      value: []
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = this.state.value;
    let index;

    // check if the check box is checked or unchecked
    if (event.target.checked) {
      // add the numerical value of the checkbox to options array
      value.push([event.target.id, event.target.className]);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = value.indexOf([event.target.id, event.target.class]);
      value.splice(index, 1);
    }

    // update the state with the new array of options
    this.setState({ value: value });
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const legislatures = stateInfo[this.props.stateId].legislatures;

    const navTabs = legislatures.map(x => (
      // x = stateInfo.{stateId}.legislatures[i]
      <NavItem>
        <NavLink
          classname={classnames({
            active: this.state.activeTab === "1"
          })}
          onClick={() => {
            this.toggle;
            x.id;
          }}
        >
          {x.name}
        </NavLink>
      </NavItem>
    ));

    const tabPanes = legislatures.map(x =>
      // x = stateInfo.{stateId}.legislatures[i]
      x.candidates.map(x => (
        // x = stateInfo.{stateId}.legislatures[i]districts[i]
        <TabPane key={x.id} tabId={this.x}>
          <Row className="districtName">{x.name}</Row>
          <Row>
            {x.candidates.map(x => (
              //x = stateInfo.{stateId}.legislatures[i]districts[i]candidates[i]
              <div key={x.name} className="candidates">
                <img className="portrait" src={x.img} alt={x.name} />
                <div
                  class="grade"
                  style={
                    x.grade === "A" || x.grade === "B"
                      ? goodGradeStyle
                      : badGradeStyle
                  }
                >
                  {x.grade}
                </div>
              </div>
            ))}
          </Row>
        </TabPane>
      ))
    );

    return (
      <Row id="NavAndPanesAndVotingCard">
        <Col id="leftColumn" sm="8">
          <h5>Candidates Up for Election</h5>
          <Nav tabs>{navTabs}</Nav>
          <TabContent activeTab={this.state.activeTab}>{tabPanes}</TabContent>
        </Col>
        <Col id="rightColumn" sm="4">
          <MyVotes
            ref={el => (this.componentRef = el)}
            value={this.state.value}
          />
          <PrintDialogue value={this.state.value} />
        </Col>
      </Row>
    );
  }
}

// State > NavsAndPanesAndVotingCard > PrintDialogue
class PrintDialogue extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return;
    {
      this.props.value.length === 0 && (
        <div style={{ color: "grey", fontSize: ".8rem" }}>
          <em>
            Click the checkbox by a candidate's photo to save them to your vote
            card.
          </em>
        </div>
      );
    }
    {
      props.value.length !== 0 && (
        <ReactToPrint
          trigger={() => (
            <Button id="printButton" color="link">
              Print voting card
            </Button>
          )}
          content={() => this.componentRef}
        />
      );
    }
  }
}

// State > NavesAndPanesAndVotingCard > MyVotes
class MyVotes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const votes = this.props.value.map(x => (
      <li key={x[0]}>
        <img src={x[1]} alt={x[0]} />
        {x[0]}
      </li>
    ));

    return (
      <div id="MyVotes">
        <h5>My Votes</h5>
        <ul id="votesList">{votes}</ul>
      </div>
    );
  }
}

















