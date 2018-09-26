import React from "react";
import { Col } from 'reactstrap';

import { colors } from '../utils/colors'
import { constants } from '../utils/constants'


const Contact = () => {
    return (
        <div className="pageContainer">
            <div className="funbox  funboxBorder">
                <Col sm="12">
                    <div className="funboxTitle">Contact</div>
                    <div className="clearfix" style={{ paddingRight: "50rem" }}>
                        <div />
                    </div>
                    <p style={{ maxWidth: 600, marginTop: 15 }}>
                        <a href={constants.mailto} target="_blank" className="site-email">
                            {constants.email}
                        </a>{" "}
                    </p>
                </Col>
            </div>
        </div>
    );
};

export default Contact;