import React, { Component } from "react";

import "./Results.css";

export default class Results extends Component {

	render() {
		const imageUrl = this.props.thumbnail;

		return (
			<div className="book-display" onClick={() => this.props.openModal(this.props)}>
	        	<div className="book-title-container">
	        		<h1 className="book-title">{ this.props.title }</h1>
	        	</div>
				<img src={ imageUrl } alt="Not Available" />
				{ this.props.rating 
					?
					<p> <span>Average Rating:</span> <span className="card-rating">{ this.props.rating }</span> </p>
					:
					<p> <i>Rating not provided</i> </p>
				}
			</div>
		)
	}
}