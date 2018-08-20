import React from 'react';
import {
  Table,
} from 'reactstrap';

// State > StateContainer > MyVotes
class MyVotes extends React.Component {
  render() {
    const votes = this.props.pressed.map(y => (
      <tr className='votes' key={y[3] + 'votes'}>
        <td>
          <img src={y[3]} alt={y[2]} />
        </td>
        <td style={{ lineHeight: '1.2' }}>
          <span className='text-muted hintText'>
            {y[0]} – {y[1]}
          </span>
          <br />
          {y[2]} ({y[4]})
        </td>
      </tr>
    ));

    return (
      <div style={{ maxWidth: 500, width: '100%', margin: 'auto' }}>
        <div className='votingCardSpacer' />
        <div className='votingCard'>
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
                ) : (
                    votes
                  )}
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