import React from "react";

import Helpers from "./utils/helper";

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			saved: []
		}
	}
	render() {
		return(
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">Search</h3>
				  	</div>
				  	<div className="panel-body">

				  	  {Helpers.getArticles.map(function(data, i) {
            			return (
              				<p key={i}>{data.response.docs.headline} <hr></hr> {data.response.docs.snippet}</p>
				  		);
          			  })}
				</div>
			</div>
		);
	}
}

module.export = Results;