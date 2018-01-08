import React, { Component } from 'react';

import Hero from './components/Hero';
import SearchBox from "./components/SearchBox";

import './App.css';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        lang: 'en',
      };
  }

  handleChange(e) {
    alert(e.target.value);
  }

  render() {
    return (
      <div>
        <Hero title="Shopping the way you like it!" subtitle="Order online. Delivered to your doorstep." className="is-medium" />

        {this.props.children}
      </div>
    );
  }
}

export default App;
