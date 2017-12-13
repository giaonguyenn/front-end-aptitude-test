import React, { Component } from "react";
import $ from "jquery";

import "./SearchBooks.css";

import SearchInput from "./SearchInput/SearchInput";
import Results from "./SearchInput/Results/Results";
import Modal from "react-awesome-modal";
import {
  TwitterButton,
  FacebookLikeButton,
  FacebookShareButton,
  FacebookMessengerButton,
  GoogleButton,
  GoogleHangoutButton,
  PinterestButton
} from 'react-social-buttons';
// import PropTypes from "prop-types";

export default class SearchBooks extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [],
			visible: false,
			title: "",
			book: {}
		};
	}

	findBooks(searchTerm) {
	    $.getJSON('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm)
	      .then((response) => {
	        this.setState({
	          books: response.items
	        });
	      })
	}

	openModal(book) {
        this.setState({
            visible : true,
            book: book
      	})
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    isBrowser () {
	    return !(typeof document === "undefined" || typeof window === "undefined");
	}

	render() {
		const books = this.state.books.map((book, i) => {
			return (
				<Results 
					title = { book.volumeInfo.title }
					thumbnail = { book.volumeInfo.imageLinks.thumbnail }
					book = { book }
					rating = { book.volumeInfo.averageRating }
					visible = { this.state.visible }
					openModal = { this.openModal.bind(this) }
					closeModal = { this.closeModal.bind(this) }
				/>
			)
		});

		const book = this.state.book.book;

		let url = ''
		   if (this.isBrowser()) { url = window.location.href; }
		 
		   // let whatsAppProps = {
		   //   msg: 'test',
		   //   button: <span>{'Your custom content'}</span>,
		   // };

		return (
			<div className="search-books">
				<SearchInput 
					findBooks = { this.findBooks.bind(this) }
				/>
				<div className="book-conatiner"> 
					<div className="book"> { books } </div>
				</div>
				{ book 
					?
					<Modal 
	                    visible= { this.state.visible }
	                    width="500"
	                    effect="fadeInDown"
	                    style="max-width: 75vw;"
	                    onClickAway={ () => this.closeModal() }
	                >
	                    <div className="modal-container">
	                    	<div className="close-container">
	                    		<a className="close-modal-x" href="javascript:void(0);" onClick={() => this.closeModal()}>X</a>
	                    	</div>
	                        <h1 className="modal-title"> { book.volumeInfo.title } </h1>
	                        <div className="modal-img">
	                        	<img src={ book.volumeInfo.imageLinks.thumbnail } alt="Unavailable"/>
	                        </div>	
	                        <p> <span> Authors: </span> { book.volumeInfo.authors } </p>
	                        <p> <span> Average Rating: </span> { book.volumeInfo.averageRating } </p>
	                        <p> <span> Category: </span> { book.volumeInfo.categories } </p>
	                        <p> { book.volumeInfo.description } </p>

	                        <div className="social-sharing-buttons">
	                        	<div><FacebookLikeButton url={url} /></div>
						       	<div><FacebookShareButton url={url} /></div>
						       	<div><FacebookMessengerButton url={url} /></div>
						       	<div><TwitterButton url={url} text="this page is cool"/></div>
						       	<div><GoogleButton url={url} /></div>
						       	<div><GoogleHangoutButton url={url} /></div>
						       	<div><PinterestButton url={url} /></div>
	                        </div>

	                    </div>
	                </Modal>
	                : 
	                null
            	}
	        </div>
		)
	}
}