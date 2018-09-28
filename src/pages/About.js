import React from 'react';
import { constants } from '../utils/constants'
const About = () => {
  return (
    <div className='pageContainer'>
      <div className='funbox funboxBorder'>
        <div className='funboxTitle'>About</div>
        <p style={{ maxWidth: 600 }}>
          <strong>{constants.name}</strong> is a tool created by Downtown for
          Democracy that displays the organization's ranks given to political
          candidates for their prospective views toward stricter gun Control.
        </p>
        <p style={{ maxWidth: 600 }}>
          <strong>Grades</strong> are determined by Downtown for Democracy and are based on each candidate's voting records and public statements.
        </p>
      </div>
    </div>
  );
};

export default About;