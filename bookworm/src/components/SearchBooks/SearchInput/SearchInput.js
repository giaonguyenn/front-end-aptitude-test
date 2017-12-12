import React, { Component } from "react";

import "./SearchInput.css";

export default class SearchInput extends Component {

	render() {
		return (
			<div>
				<div>
					<h1>Search Books by Title or Author</h1>
				</div>
				<div className="input-field">
					<input type="text" placeholder="Enter Keyword or Title" onChange={ (e) => { this.props.findBooks(e.target.value) } }></input>
					<input type="text" placeholder="Enter Author's Name" onChange={ (e) => { this.props.findBooks(e.target.value) } }></input>
				</div>
			</div>
		)
	}
}