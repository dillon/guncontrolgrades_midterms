import React from 'react';
import { constants } from '../utils/constants'
import { colors } from '../utils/colors'
import { IconContext } from 'react-icons'
import { TiStar } from 'react-icons/ti'

const About = () => {
  return (
    <div className='pageContainer'>
      <div className='funbox funboxBorder'>
        <div className='funboxTitle'>About</div>
        <p style={{ maxWidth: 600 }}>
          Since 1976, the National Rifle Association has issued grades to elected officials and political candidates based on either their voting records or a response to a questionnare. Once prominently publicized, these grades have in the last year disappeared from the NRA's website and literature. They are still being issued, however, to pressure politicians into following the NRA's anti-gun control agenda.
        </p>
        <p style={{ maxWidth: 600 }}>
          <strong>{constants.name}</strong> are an inversion of the grades issued by the National Rifle Association. An "F" from the NRA becomes an "A" from GCG; a "D" becomes a "B" and so on. Additionally, a
          <span id='endorsementStarAboutPage'>
            <IconContext.Provider value={{ color: colors.red, size: '1.4rem', className: 'global-class-name' }}>
              <TiStar />
            </IconContext.Provider>
          </span>
          from GCG indicates that a candidate has been endorsed by <a style={{ textDecoration: 'underline', color: 'inherit' }} href='https://giffords.org'>Giffords</a>, an organization founded to fight the gun violence epidemic. For candidates who have not yet been rated by either organization, a question mark is posted.
        </p>
      </div>
    </div>
  );
};

export default About;