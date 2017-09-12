// An inline style is a style that's written as an attribute, like this:

<h1 style={{ color: 'red' }}>Hello world</h1>

// The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX."
// The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:

{ color: 'red' }

// If you inject an object literal into JSX, and your entire injection is only that object literal, 
// then you will end up with double curly braces. 
// There's nothing unusual about how they work, but they look funny and can be confusing.



// ***** STYLING OPTIONS IN REACT: ***** //

// 1. STYLING USING AN OBJECT LITERAL THAT HAS BEEN INJECTED INTO THE H1 JSX
import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);


// 2. STYLING USING A CONST MODULE CALLED STYLES
import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100, //px is assumed when a number has nothing after it
  fontSize: 50 //otherwise we have to write '2em' in quotation
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);