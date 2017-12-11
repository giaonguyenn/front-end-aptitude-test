import React, { Component } from "react";

import "./HeroHeader.css";

import hero from "../../assets/open-book-macro-wallpaper.jpg";


export default class HeroHeader extends Component {

	render() {
		return (
			<div className="App-header" style={{ backgroundImage: `url(${hero})` }}>
	          <h1 className="App-title">BookWorm</h1>
	          <p className="App-subtitle">Find Your Next Favorite Read</p>
	          <a href="#search-books" ><button type="button" className="start-search">Start Search</button></a>
	        </div>
		)
	}
}