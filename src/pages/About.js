import React from 'react';
import { Col } from 'reactstrap';
import { constants } from '../utils/constants'
import { colors } from '../utils/colors'
const About = () => {
  return (
    <div className="pageContainer">
      <div className="funbox funboxBorder">
        <Col sm="12">
          <div className="funboxTitle">About</div>
          <div className="clearfix" style={{ paddingRight: "30rem" }}>
            <div />
          </div>
          <p style={{ maxWidth: 600, marginTop: 15 }}>
            <strong>{constants.name}</strong> is a tool created by Downtown for
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