import React, {Component} from 'react';

class ShowHide extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			showResults: false
		}
		this.onClick = this.onClick.bind(this);
	}
	onClick(){
		console.log(this.state.showResults);
		if(this.state.showResults){
			this.setState({showResults: false});
		}
		else {
			this.setState({ showResults: true });
		}
	}
	render() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
}

class Results extends Component{
    render() {
        return (
            <div id="results" className="search-results">
                Some Results
            </div>
        );
    }
}
// export default Results;

export default ShowHide;
