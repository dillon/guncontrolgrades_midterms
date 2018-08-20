import React from 'react';
import { Col } from 'reactstrap';
const About = () => {
    return (
      <div className="pageContainer">
        <div className="funbox">
          <Col sm="12">
            <div className="funboxTitle">About</div>
            <div className="clearfix" style={{ paddingRight: "30rem" }}>
              <div />
            </div>
            <p style={{ maxWidth: 600, marginTop: 15 }}>
              <strong>D4D Gun Control</strong> is a tool created by Downtown for
              Democracy that displays the organization's ranks given to political
              candidates for their prospective views toward stricter gun Control.
            </p>
            <div className="clearfix" style={{ paddingRight: "30rem" }}>
              <div />
            </div>
            <p style={{ maxWidth: 600, marginTop: 15 }}>
              <strong>Grades</strong> are determined by Downtown for Democracy and are based on each candidate's voting records and public statements.
            </p>
          </Col>
        </div>
      </div>
    );
  };

  export default About;