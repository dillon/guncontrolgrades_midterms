import React from 'react';

// icons
import { IconContext } from 'react-icons';
import { GoPlus, GoCheck } from 'react-icons/go';

// constants
import { colors } from '../utils/colors.js';
import { constants } from '../utils/constants';

// styles
import { Candidates as Styles } from '../utils/styles'

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
        style={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade ? Styles.candidateCardSelected : Styles.candidateCard}
        className='candidateCard'
        key={x.img + x.name}
      >
        <img style={Styles.candidateImage} src={x.img} alt={x.name} />
        <div style={Styles.candidateInfo}>
          <div style={Styles.candidateName}>
            {x.name}
            <div style={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade ? Styles.candidateNameAlternativeSelected : Styles.candidateNameAlternative}>
              {x.party}
            </div>
          </div>
          <div style={Styles.candidateGradeAndCheck}>
            <div style={Styles.candidateGrade}>
              {x.grade}
            </div>
            <div style={Styles.buttonContainer}>
              {this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade ?
                <button
                  class='candidateCheckbox'
                  style={Styles.candidateCheckboxActive}
                  onClick={() => this.onRadioBtnClick(joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade)}
                  active={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade}
                >
                  <IconContext.Provider value={{ color: 'white', size: '1.2em', className: 'global-class-name' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <GoCheck />
                    </div>
                  </IconContext.Provider>
                </button>
                :
                <button
                  class='candidateCheckbox candidateCheckboxNotActive'
                  style={Styles.candidateCheckbox}
                  onClick={() => this.onRadioBtnClick(joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade)}
                  active={this.state.rSelected === joinedString + x.name + ',' + x.img + ',' + x.party + ',' + x.grade}
                >
                  <IconContext.Provider value={{ color: colors.primary, size: '.9em', className: 'global-class-name' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <GoPlus />
                    </div>
                  </IconContext.Provider >
                  <div className='AddText' style={{ fontSize: '.9rem', }}>Add</div>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    ));

    return candidates
  }
}

export default Candidates;