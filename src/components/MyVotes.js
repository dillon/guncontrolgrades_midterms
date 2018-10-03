import React from 'react';

// bootstrap
import {
  Table,
} from 'reactstrap';

// import styles
import { MyVotes as Styles } from '../utils/styles'

class MyVotes extends React.Component { // State -> StatePage -> MyVotes
  render() {
    const votes = this.props.pressed.map(y => (
      <tr key={y[3] + 'votes'}>
        <td>
          <img style={Styles.cardImage} src={y[3]} alt={y[2]} />
        </td>
        <td style={{ lineHeight: '1.2' }}>
          <div className='text-muted hintText'>
            {y[0]}{y[1] === 'Statewide' ? '' : ' - ' + y[1]}
          </div>
          <div style={Styles.cardName}>
            {y[2]} ({y[4] === 'Republican' || y[4] === 'Democrat' || y[4] === 'Green' || y[4] === 'Libertarian' ? y[4][0] : 'I'})
            </div>
          <div style={Styles.cardGrade}>
            {y[5]}{y[6]==='true' && '*'}
          </div>
        </td>
      </tr>
    ));

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
                  <div className='text-muted' style={{ fontSize: '.8rem' }}>
                    <em>Select a candidate to add them to your voting card.</em>
                  </div>
                ) : (votes)}
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