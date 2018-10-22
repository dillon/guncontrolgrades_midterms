// /About
import React from 'react';

// Constants
import { constants } from '../utils/constants';

// Icons
import { IconContext } from 'react-icons';
import { MdStar } from 'react-icons/md';

// Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-127152248-1');


const About = () => {
  ReactGA.pageview(window.location.hash);
  return (
    <div className='pageContainer'>
      <div className='funbox funboxBorder'>
        <div className='funboxTitle'>
          About
        </div>
        <p style={{ maxWidth: 600 }}>
          Since 1976, the National Rifle Association has issued grades to elected officials and political candidates based on either their voting records or a response to a questionnare. Once prominently publicized, these grades now appear on the NRA's website only before elections with the goal of pressuring candidates into adhering to the NRA's anti-gun control agenda. 
        </p>
        <p style={{ maxWidth: 600 }}>
          <strong>{constants.name}</strong> inverts the grades issued by the National Rifle Association. An <strong>F</strong> from the NRA becomes an <strong>A</strong> from GCG; a <strong>D</strong> becomes a <strong>B</strong>, and so on.
        </p>
        <p style={{ maxWidth: 600 }}>Additionally, a
          <span id='endorsementStarAboutPage'>
            &nbsp;
            <IconContext.Provider value={{
              color: 'black',
              size: '1.2em',
              className: 'global-class-name'
            }}>
              <MdStar />
            </IconContext.Provider>
            &nbsp;
          </span>
          from GCG indicates that a candidate has been endorsed by&nbsp;
          <a style={{ textDecoration: 'underline', color: 'inherit' }} href='https://giffords.org' rel="noopener noreferrer" target='_blank'>
            Giffords
          </a>
          &nbsp;or&nbsp;
          <a style={{ textDecoration: 'underline', color: 'inherit' }} href='https://gunsensevoter.org' rel="noopener noreferrer" target='_blank'>
            Gun Sense
          </a>
          , organizations founded to fight the gun violence epidemic. Candidates who have not yet been rated by either organization or the NRA have a question mark by their name.
        </p>
      </div>
    </div>
  );
};

export default About;