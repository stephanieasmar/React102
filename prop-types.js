// ********** PROPTYPES ********** //
// propTypes are useful for two reasons. The first reason is prop VALIDATION.

// Validation can ensure that your props are doing what they're supposed to be doing. 
// If props are missing, or if they're present but they aren't what you're expecting, 
// then a warning will print in the console.

// This is useful, but reason #2 is arguably more useful: DOCUMENTATION.

// Documenting props makes it easier to glance at a file and quickly understand the component class inside. 
// When you have a lot of files, and you will, this can be a huge benefit.



React.PropTypes.expected-data-type-goes-here //The value of each property in propTypes should fit this pattern:

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}
// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};



// CONTAINER COMPOBENT
import React from 'react';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired
};


// RENDERING COMPONENT
import React from 'react';
import ReactDOM from 'react-dom';
import { BestSeller } from './BestSeller';

export class BookList extends React.Component {
  render() {
    return (
      <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller 
              title="Glory and War Stuff for Dads" 
              author="Sir Eldrich Van Hoorsgaard" 
              weeksOnList={10} />
            <BestSeller 
              title="The Crime Criminals!" 
              author="Brenda Sqrentun" 
              weeksOnList={2} />
            <BestSeller
              title="Subprime Lending For Punk Rockers" 
              author="Malcolm McLaren" 
              weeksOnList={600} />
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BookList />, document.getElementById('app'));

