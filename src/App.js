import React, { Component } from 'react';
import logo from './logo.svg';
import Liquid from './Liquid';
import ShowHide from './ShowHide';
// import './App.css';

class App extends Component {
	render() {
		var names = ['Jake', 'Jason', 'John'];
		var greeting = "sdsd";
		var water = {
			name: "Water",
			freezing: 32,
			boiling: 212
		};
		var ethanol = {
			name: "Ethanol",
			freezing: -173.2,
			boiling: 173.1
		};
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Hello { greeting}</h2>
				</div>
				<ul>
					{names.map(function(name,index){
						return <li key={index}>{name}</li>;
					})}
				</ul>
				<Liquid config={water}/>
				<Liquid config={ethanol}/>
				<ShowHide/>
			</div>
		);
	}
}

export default App;
