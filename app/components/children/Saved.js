import React, {Component} from "react"
import Helpers from "../utils/Helpers"
var Link = require("react-router").Link

export default class Saved extends Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
		this.getSaved = this.getSaved.bind(this)
	}

	render() {
		return (
			<div className="container">
		    <div className="col-lg-12">
		     <div className="panel panel-primary">
		      <div className="panel-heading">
		       <h3 className="panel-title">Saved Articles</h3>
		      </div>
		      <div className="panel-body">
		       <p>Sum moFuckin savory articles</p>
				    <div key={i}>
					    {this.state.articles.map((article, i) => (
					    	<div className="panel panel-default">
					  			<div className="panel-heading">
					    			<h3 className="panel-title">{article.title}</h3>
					  			</div>
					  			<div className="panel-body">
					        	<p>{article.body}</p>
					        </div>
					      </div>
					    ))}
				    </div>
		      </div>
		     </div>
		    </div>
		  </div>
		)
	}
}