import React from 'react';
import {
  Button,
} from 'reactstrap';

// styles and global variables
const goodGradeStyle = {
  color: '#00ac64',
  fontWeight: 'bold',
  textShadow: '.5px 1px 1px #000',
  'WebkitTextFillColor':
    '#0eca00' /* Will override color (regardless of order) */,
  'WebkitTextStrokeWidth': '.1px',
  'WebkitTextStrokeColor': 'black'
};
const badGradeStyle = {
  color: 'black'
};


// State > StateContainer > {tabPanes > Candidates}
class Candidates extends React.Component {
    constructor(props) {
      // props: candidates, legislature, district, handleChange
      super(props);
      this.state = {
        // each district has its own state to manage which radio button is pressed
        rSelected: ''
      };
      this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
  
    onRadioBtnClick(selected) {
      const index = this.state.rSelected.indexOf(selected);
      const stateIsEmpty = this.state.rSelected.length === 0;
      const currState = this.state.rSelected;
      if (index < 0 && stateIsEmpty) {
        this.setState({ rSelected: selected });
        this.props.handleChange('add', selected);
      } else if (index < 0 && !stateIsEmpty) {
        this.setState({ rSelected: selected });
        this.props.handleChange('change', selected, currState);
      } else {
        this.setState({ rSelected: '' });
        this.props.handleChange('delete', selected);
      }
    }
  
    render() {
      const joinedString =
        this.props.legislature + ',' + this.props.district + ',';
      const candidates = this.props.candidates.map(x => (
        <Button
          style={{ display: 'flex', flexDirection: 'column' }}
          color='secondary'
          key={x.name + '.' + x.img}
          onClick={() =>
            this.onRadioBtnClick(
              joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade
            )
          }
          active={
            this.state.rSelected ===
            joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade
          }
        >
          <img src={x.img} alt={x.name} style={{ alignSelf: 'flex-start' }} />
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', boxSizing: 'border-box', flexWrap: 'no-wrap', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
            <div style={{ fontSize: '.9rem' }}>
              {x.name}
            </div>
            <div
              className='letterGrades'
              style={x.grade === 'A' || x.grade === 'B' ? goodGradeStyle : badGradeStyle}
            >
              {x.grade}
            </div>
          </div>
          <div className='candidateParty'>
              {x.party}
            </div>
  
        </Button >
      ));
      return <div className='candidates'>{candidates}</div>;
    }
  }

  export default Candidates;