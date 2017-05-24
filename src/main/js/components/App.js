import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div>Hello {this.props.name}</div>
	}
}

App.propTypes = {
	name: React.PropTypes.string.isRequired
}

App.defaultProps = {
	name: 'default name'
}

export default App;
