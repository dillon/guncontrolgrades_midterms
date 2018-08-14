import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  const goodGradeStyle = {
    width: "10%",
    color: "#00ac64",
    fontWeight: "bold",
    textShadow: ".5px 1px 1px #000",
    "WebkitTextFillColor":
      "#0eca00" /* Will override color (regardless of order) */,
    "WebkitTextStrokeWidth": ".1px",
    "WebkitTextStrokeColor": "black"
  };
  const badGradeStyle = {
    width: "10%",
    color: "black"
  };
  
const x = {
  name: 'Curtis Mayflower',
  img: require('../portraits/todo.jpg'),
  grade: 'A'
}
  storiesOf('CandidateCard')
  .add('version0', () => (
    
    <div xs="6" className="noMarginCol">
    <Button
      color="secondary"
      key={x.name + "." + x.img}
      onClick={() =>
        this.onRadioBtnClick(
          joinedString + x.name + "," + x.img + "," + x.grade
        )
      }
    >
      <img src={x.img} alt={x.name} />
      <p id="textbox">
        <span
          className="float-left"
          style={{ fontSize: ".9rem", overflow: "hidden", width: "90%" }}
        >
          {x.name}
        </span>
        <span
          className="letterGrades float-right"
          style={
            x.grade === "A" || x.grade === "B"
              ? goodGradeStyle
              : badGradeStyle
          }
        >
          {x.grade}
        </span>
      </p>
    </Button>
  </div>
  ))