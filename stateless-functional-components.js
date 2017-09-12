// ********** STATELESS FUNCTIONAL COMPONENTS ********** //

// When you separate a container component from a presentational component, 
// the presentational component will always end up like this: one render() function, and no other properties.

// If you have a component class with nothing but a render function, 
// then you can rewrite that component class in a very different way. 
// Instead of using React.Component, you can write it as JavaScript function!

// A component class written as a function is called a stateless functional component. 


// REGULAR STATELESS COMPONENT
export class Friend extends React.Component {
	render() {
		return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
	}
}

// STATELESS FUNCTIONAL COMPONENT
export const Friend = () => {
  return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);
