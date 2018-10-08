import React from 'react';

import { constants } from '../utils/constants'

// analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-127152248-1'); // Here we should use our GA id

const Contact = () => {
  ReactGA.pageview(window.location.hash);
    return (
        <div className='pageContainer'>
            <div className='funbox funboxBorder'>
                <div className='funboxTitle'>Contact</div>
                <p style={{ maxWidth: 600, marginTop: 15 }}>
                    <a href={constants.mailto} target='_blank' className='site-email'>
                        {constants.email}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;