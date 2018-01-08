import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {
          verticalSelection: '',
        };
    }


    handleOptionChange(e) {
      this.setState({
        verticalSelection: e.target.value
      });
    }


    handleFormSubmit(e){
      e.preventDefault();
      console.log('You have selected:', this.state.verticalSelection);
    }


    render() {
        return (
          <section className="hero is-link">
            

            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">
                  {this.props.title}
                </h1>
                <h2 className="subtitle">
                  {this.props.subtitle}
                </h2>
              </div>





            </div>


          </section>
        );
    }
}

export default Hero;
