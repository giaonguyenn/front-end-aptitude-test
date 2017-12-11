import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import './App.css';

import HeroHeader from "./components/HeroHeader/HeroHeader";
import SearchBooks from "./components/SearchBooks/SearchBooks";
import Footer from "./components/Footer/Footer";

// Offset all anchors by -60 to account for a fixed header 
// and scroll more quickly than the default 400ms 
configureAnchors({offset: -60, scrollDuration: 200});

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <HeroHeader />
        <ScrollableAnchor id="search-books">
          <SearchBooks />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}
