// /State/:id -> Candidates
import React from 'react';

// Styles
import { Candidates as Styles } from '../utils/styles';

// Constants
import { colors } from '../utils/colors.js';

// Icons
import { IconContext } from 'react-icons';
import { GoPlus, GoCheck } from 'react-icons/go';
import { TiStar } from 'react-icons/ti';


// State > StateContainer > {tabPanes > Candidates}
class Candidates extends React.Component {
  constructor(props) {
    // props: candidates, legislature, district, handleChange
    super(props);
    this.state = {
      rSelected: '' // which candidate in this district is selected?
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(selected) {
    // Handling each district's radio button logic
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
    return this.props.candidates.map(x => {
      // Map over candidates
      const joinedString = this.props.legislature + ',' + this.props.district + ',' + x.name + ',' + x.img + ',' + x.party + ',' + x.grade + ',' + x.endorsedByGiffords;
      let endorsementStarSize = '1rem'
      let endorsementStarPadding = true
      if (!x.grade) {
        // Handle grade and endorsement styling
        if (!x.endorsedByGiffords) {
          // If no grade and also no endorsement, grade = '?'
          x.grade = '?';
        }
        else {
          // If no grade but there is endorsement, make endorsement star larger and get rid of padding
          x.grade = '';
          endorsementStarSize = '1.7rem';
          endorsementStarPadding = false;
        }
      }
      return (
        <div
          style={this.state.rSelected === joinedString ? Styles.candidateCardSelected : Styles.candidateCard}
          className='candidateCard'
          key={x.img + x.name}
        >
          <img style={Styles.candidateImage} src={x.img} alt={x.name} />
          <div style={Styles.candidateInfo}>
            <div style={Styles.candidateName}>
              {x.name}
              <div style={this.state.rSelected === joinedString ? Styles.candidateNameAlternativeSelected : Styles.candidateNameAlternative}>
                {x.party}
              </div>
            </div>
            <div style={Styles.candidateGradeAndCheck}>
              <div className={endorsementStarPadding ? 'endorsementStarPadding' : 'endorsementStarPaddingLargeStar'} style={Styles.candidateGrade}>
                {x.grade}{x.endorsedByGiffords && (
                  <IconContext.Provider value={{ color: colors.red, size: endorsementStarSize, className: 'global-class-name' }}>
                    <TiStar />
                  </IconContext.Provider>
                )}
              </div>
              <div style={Styles.buttonContainer}>
                {this.state.rSelected === joinedString ?
                  // If this candidate is selected, render active +Add button
                  <button
                    className='candidateCheckbox'
                    style={Styles.candidateCheckboxActive}
                    onClick={() => this.onRadioBtnClick(joinedString)}
                    active={this.state.rSelected === joinedString}
                  >
                    <IconContext.Provider value={{ color: 'white', size: '1.2em', className: 'global-class-name' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <GoCheck />
                      </div>
                    </IconContext.Provider>
                  </button>
                  :
                  // If this candidate is selected, render inactive +Add button
                  <button
                    className='candidateCheckbox candidateCheckboxNotActive'
                    style={Styles.candidateCheckbox}
                    onClick={() => this.onRadioBtnClick(joinedString)}
                    active={this.state.rSelected === joinedString}
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
      )
    });
  }
}

export default Candidates;