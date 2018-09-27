import React from 'react';

import { constants } from '../utils/constants'

const Contact = () => {
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