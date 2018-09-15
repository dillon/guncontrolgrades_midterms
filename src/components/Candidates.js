import React from 'react';
import {
  Button
} from 'reactstrap';

import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';

import { GoPlus, GoCheck } from 'react-icons/go';
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
      <div
        style={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade ? candidateCardSelected : candidateCard}
        className='candidateCard'
        key={x.img + x.name}
      >
        <img style={candidateImage} src={x.img} alt={x.name} />
        <div style={candidateInfo}>
          <div style={candidateName}>
            {x.name}&nbsp;({x.party[0]})
            <div style={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade ? candidateNameAlternativeSelected : candidateNameAlternative}>
            {x.party}
          </div>
          </div>
          <div style={candidateGradeAndCheck}>
            <div style={candidateGrade}>
              {x.grade}
            </div>
            {this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade ?
              <button
                style={candidateCheckboxActive}
                onClick={() => this.onRadioBtnClick(joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade)}
                active={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade}
              >
                <IconContext.Provider value={{ color: 'white', size: '1.2em', className: 'global-class-name' }}>
                  <div style={{ paddingBottom: 2 }}>
                    <GoCheck />
                  </div>
                </IconContext.Provider>
              </button>
              :
              <button
                style={candidateCheckbox}
                onClick={() => this.onRadioBtnClick(joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade)}
                active={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade}
              >
                <IconContext.Provider value={{ color: '#00ac64', size: '.9em', className: 'global-class-name' }}>
                  <div style={{ paddingBottom: 2 }}>
                    <GoPlus />
                  </div>
                </IconContext.Provider>
                <div style={{ fontSize: '.9rem' }}>Add</div>
              </button>
            }
          </div>
        </div>
      </div>
    ));

    return candidates
  }
}

Candidates.propTypes = {
  candidates: PropTypes.object,
  district: PropTypes.string,
  legislature: PropTypes.string
};


const candidateCard = {
  height: 130,
  borderRadius: 5,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  transition: '.2s',
  webkitTransition: '.2s',
}

const candidateCardSelected = {
  backgroundColor: 'rgba(25, 171, 102, .15)',
  color: '#0B6B3E',
  height: 130,
  borderRadius: 5,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid rgba(25, 171, 102, 1)',
  transition: '.2s',
  webkitTransition: '.2s'

}

const candidateImage = {
  height: 130,
  width: 100,
}

const candidateInfo = {
  padding: 10,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const candidateName = {
  fontSize: '1.0rem',
  lineHeight: 1.2,
}

const candidateNameAlternative = {
  color: 'grey',
  fontSize: '.8rem'
}

const candidateNameAlternativeSelected = {
  color: 'rgba(102, 147, 126, 1)',
  fontSize: '.8rem',
}

const candidateGrade = {
  fontSize: '1.7rem',
  paddingBottom: 5
}

const candidateGradeAndCheck = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
  alignItems: 'center',
}


const candidateCheckboxActive = {
  color: 'white',
  backgroundColor: '#00ac64',
  width: 60,
  height: 35,
  borderRadius: 3,
  border: '1px solid #00ac64',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}

const candidateCheckbox = {
  color: '#00ac64',
  width: 60,
  height: 35,
  borderRadius: 3,
  border: '1px solid #00ac64',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

}

export default Candidates;