// /State/:id -> MyVotes
import React from 'react';

// Styles
import { MyVotes as Styles } from '../utils/styles'

// Constants
import { colors } from '../utils/colors'
import { constants } from '../utils/constants'

// Bootstrap
import { Table } from 'reactstrap';

// Icons
import { IconContext } from 'react-icons';
import { TiStar } from 'react-icons/ti';


class MyVotes extends React.Component {
  render() {
    const votes = this.props.pressed.map(y => {
      // Votes in my voting card
      const legislature = y[0]
      const district = y[1] === 'Statewide' ? '' : ' - ' + y[1] // if district=Statewide, delete it
      const name = y[2]
      const img = y[3]
      const party = y[4] === 'Republican' || y[4] === 'Democrat' || y[4] === 'Green' || y[4] === 'Libertarian' ? y[4][0] : 'I'
      let grade = y[5]
      const endorsed = y[6]
      let endorsementStarSize = '.8rem'
      let endorsementStarPadding = true
      if (!grade) { // if no grade and also no endorsement, grade = '?'
        if (!endorsed) { grade = '?'; }
        else { grade = ''; endorsementStarSize = '1.1rem'; endorsementStarPadding = false; } // if no grade but no endorsement, make endorsement star larger
      }

      return (
        <tr key={y[3] + 'votes'}>
          <td>
            <img style={Styles.cardImage} src={img} alt={y[2]} />
          </td>
          <td style={{ lineHeight: '1.2' }}>
            <div className='text-muted hintText'>
              {legislature}{district}
            </div>
            <div style={Styles.cardName}>
              {name} ({party})
            </div>
            <div style={Styles.cardGrade}>
              {grade}{endorsed === 'true' && (
                <div className={endorsementStarPadding ? 'endorsementStarPaddingSmall' : 'endorsementStarPaddingSmallLargeStar'} style={Styles.candidateGrade}>
                  <IconContext.Provider value={{
                    color: colors.red,
                    size: endorsementStarSize,
                    className: 'global-class-name'
                  }}>
                    <TiStar />
                  </IconContext.Provider>
                </div>
              )}
            </div>
          </td>
        </tr>
      )
    });

    return (
      <div style={{
        maxWidth: 500,
        width: '100%',
        margin: 'auto'
      }}>
        <div id={this.props.id}>
          <p style={{ width: '100%' }} className='smallCaps'>
            MY {this.props.stateName.toUpperCase()} VOTING CARD
            </p>
          <div className='tableDiv'>
            <Table id='votesList' flush>
              <tbody>
                {this.props.pressed.length === 0 ? (
                  <tr className='text-muted' style={{ fontSize: '.8rem' }}>
                    <td><em>Select a candidate to add them to your voting card.</em></td>
                  </tr>
                ) : votes}
              </tbody>
            </Table>
          </div>
          <div style={{ width: '100%' }}>
            <div
              style={{
                position: 'relative',
                bottom: 0,
                textAlign: 'center'
              }}
              className='hintText text-muted'
            >
              created on {constants.URLString}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyVotes;