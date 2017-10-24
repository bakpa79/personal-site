import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import DrawerMenu from './components/drawer-menu';
import HomepageTextAndLayout from './components/homepage-text-and-layout';
import Footer from './components/footer';



import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <DrawerMenu />
        <HomepageTextAndLayout />
        <Footer />
      </main>

    );
  }
}

export default App;
