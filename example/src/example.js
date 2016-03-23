var React = require('react');
var ReactDOM = require('react-dom');
var FilteredList = require('react-component-filtered-list');

var App = React.createClass({
	render () {
		return (
			<div>
				<FilteredList />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
