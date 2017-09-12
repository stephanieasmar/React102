// STATELESS COMPONENTS INHERIT FROM STATEFUL COMPONENTS

// Rendering is the only way for a component to pass props to another component
// Any component rendered by a different component must be included in an export statement


// A <Parent /> is supposed to pass its state to a <Child />
// Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js


// ********** PARENT.js **********
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <div></div>;
  }
}

// ********** CHILD.js **********
import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}