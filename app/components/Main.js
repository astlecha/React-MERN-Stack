import React from "react";

var Link = require("react-router").Link;

class Main extends React.Component {
	constructor(props) {

		super(props);

		this.state = {
			topic: "", 
			startYear: "", 
			endYear: ""
		}
		this.setParent = this.setParent.bind();
	}

	setParent(topic, startYear, endYear){
		this.setState({
			topic: topic,
			startYear: startYear,
			endYear: endYear
		})
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>Scrub the New York Times!</h1>
						<p>
						<Link to="/Search"><button className="btn btn-primary btn-lg">Search</button></Link>
            			<Link to="/Saved"><button className="btn btn-danger btn-lg">Saved Articles</button></Link>
            			</p>
					</div>
					<div className="row">

						<Search 
							setParent = {this.state.setParent}/>
						<Saved />
						
					</div>
				</div>
			</div>
		);
	}
}

export default Main;