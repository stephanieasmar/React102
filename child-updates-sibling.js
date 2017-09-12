// Child Components Update Sibling Components
// One Sibling to Display, Another to Change
// Each child should have only one job


// In the below example:
// you will have one stateless component display information, 
// and a different stateless component offer the ability to change that information.

// parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);



// child.js

import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}



// sibling.js

import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}


// STATELESS COMPONENTS INHERIT FROM STATEFUL COMPONENTS RECAP:

// A stateful component class defines a function that calls this.setState.
// The stateful component passes that function down to a stateless component. 
// That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. 
// The stateless component class uses this new function as an event handler. 
// When an event is detected, the parent's state updates. (A user selects a new dropdown menu item)
// The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. 
// That stateless component class receives the state and displays it. 
// An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change
// This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear.