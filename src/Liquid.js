import React, {Component} from 'react';

class Liquid extends Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			currentTemp: 60
		};
		this.setTemperature = this.setTemperature.bind(this);
	}
	setTemperature(e){
		console.log(e.target.value);
		console.log(this.state.currentTemp);
		this.setState({currentTemp: e.target.value});
	}
	render() {
		// empty variable that will hold either "Liquid", "Solid", or "Gas"
		var stateOfMatter;

		// If temp is on/below freezing, it's a solid
		if (this.state.currentTemp <= this.props.config.freezing) {
			stateOfMatter = 'Solid';

			// if temp is on/above boiling, it's a gas
		} else if (this.state.currentTemp >= this.props.config.boiling) {
			stateOfMatter = 'Gas';

			// otherwise it's just a liquid
		} else {
			stateOfMatter = 'Liquid';
		}

		return (
			<div>
				<input type="number" onChange={ this.setTemperature } value={ this.state.currentTemp } />
				<p>At { this.state.currentTemp }°F, {this.props.config.name} is considered to be a "{ stateOfMatter }" state of matter.</p>
			</div>
		);
	}
}

export default Liquid;
