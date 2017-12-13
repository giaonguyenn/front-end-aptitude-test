import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import "./SearchInput.css";

export default class SearchInput extends Component {

	render() {
		return (
			<div>
				<div>
					<h1>Search Books by Title or Author</h1>
				</div>
				<div className="input-field">
					<DebounceInput minLength={ 2 } debounceTimeout={ 300 } type="text" placeholder="Enter Keyword or Title" onChange={ (e) => { this.props.findBooks(e.target.value) } } />
					<DebounceInput minLength={ 2 } debounceTimeout={ 300 } type="text" placeholder="Enter Author's Name" onChange={ (e) => { this.props.findBooks(e.target.value) } } />
				</div>
			</div>
		)
	}
}