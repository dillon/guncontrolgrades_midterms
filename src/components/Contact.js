import React from "react";
import { Col } from 'reactstrap';


const EMAIL_ADDRESS = "info@downtown4democracy.org";
const EMAIL_URL =
  "mailto:info@downtown4democracy.org?subject=Gun%20Control%20Map";


const Contact = () => {
    return (
        <div className="pageContainer">
            <div className="funbox">
                <Col sm="12">
                    <div className="funboxTitle">Contact</div>
                    <div className="clearfix" style={{ paddingRight: "50rem" }}>
                        <div />
                    </div>
                    <p style={{ maxWidth: 600, marginTop: 15 }}>
                        <a href={EMAIL_URL} target="_blank" className="site-email">
                            {EMAIL_ADDRESS}
                        </a>{" "}
                    </p>
                </Col>
            </div>
        </div>
    );
};

export default Contact;