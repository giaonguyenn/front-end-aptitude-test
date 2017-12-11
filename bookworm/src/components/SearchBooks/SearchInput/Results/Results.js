import React, { Component } from "react";

import "./Results.css";

export default class Results extends Component {

	render() {
		const imageUrl = this.props.imageUrl.thumbnail;
		// const bookId = this.props.bookId;

		return (
			<div className="book-display" onClick={() => this.props.openModal(this.props)}>
	        	<h1 className="book-title">{ this.props.title }</h1>
				<img src={ imageUrl } alt="Not Available" />
			</div>
		)
	}
}