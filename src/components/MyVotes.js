import React from 'react';

// bootstrap
import {
  Table,
} from 'reactstrap';

// import styles
import { MyVotes as Styles } from '../utils/styles'

class MyVotes extends React.Component { // State -> StatePage -> MyVotes
  render() {
    const votes = this.props.pressed.map(y => {
      const legislature = y[0]
      const district = y[1] === 'Statewide' ? '' : ' - ' + y[1]
      const name = y[2]
      const img = y[3]
      const party = y[4] === 'Republican' || y[4] === 'Democrat' || y[4] === 'Green' || y[4] === 'Libertarian' ? y[4][0] : 'I'
      const grade = y[5] ? y[5] : '?'
      const endorsed = y[6] === 'true' && '*'
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
              {grade}{endorsed}
            </div>
          </td>
        </tr>
      )
    });

    return (
      <div style={{ maxWidth: 500, width: '100%', margin: 'auto' }}>
        {/* <div className='votingCardSpacer' /> */}
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


export default MyVotes;