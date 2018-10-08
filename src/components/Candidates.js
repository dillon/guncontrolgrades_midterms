import React from 'react';

// icons
import { IconContext } from 'react-icons';
import { GoPlus, GoCheck } from 'react-icons/go';
import { TiStar } from 'react-icons/ti'
// constants
import { colors } from '../utils/colors.js';

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
    const candidates = this.props.candidates.map(x => {
      const joinedString = this.props.legislature + ',' + this.props.district + ',' + x.name + ',' + x.img + ',' + x.party + ',' + x.grade + ',' + x.endorsedByGiffords;
      let endorsementStarSize = '1rem'
      let endorsementStarPadding = true
      if (!x.grade) {
        // if no grade and also no endorsement, grade = '?'
        if (!x.endorsedByGiffords) { x.grade = '?'; }
        // if no grade but no endorsement, make endorsement star larger
        else { x.grade = ''; endorsementStarSize = '1.7rem'; endorsementStarPadding = false; }
      }
      // const image = require(`${x.img}`)
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

    return candidates
  }
}

export default Candidates;