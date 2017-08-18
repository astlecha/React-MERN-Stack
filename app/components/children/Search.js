import React from "react";

import Form from "./components/children/grandchildren/Form";
import Results from "./components/children/grandchildren/Results";

// Include Link component from react router
var Link = require("react-router").Link;

class Search extends React.Component {
	constructor() {
		super(props);

		this.state = {
			articles: []
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	render() {
		return (
			<div className="container">
		        <div className="col-lg-12">
		          <div className="panel panel-primary">
		            <div className="panel-heading">
		              <h3 className="panel-title">Search & Results</h3>
		            </div>
		            <div className="panel-body">

		              	<Form />
		              	<Results />

		            </div>

		          </div>
		        </div>
		    </div>
		);
	}
};

export default Search;