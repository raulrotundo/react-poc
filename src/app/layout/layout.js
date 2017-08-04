import React, { Component } from 'react';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <section className="main-container">
          Content
        </section>
      </div>
    );
  }
}

export default Layout;
