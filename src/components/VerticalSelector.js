import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

class VerticalSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
          verticalSelectionValue: '',
        };
    }


    handleOptionChange(e) {
      this.setState({
        verticalSelectionValue: e.target.value
      });
    }


    handleFormSubmit(e){
      e.preventDefault();
      console.log('You have selected:', this.state.verticalSelectionValue);
    }


    render() {
        return (
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <div className="radio">
              <label>
                <input type="radio" value="pharmacy"
                      checked={this.state.verticalSelectionValue === 'pharmacy'}
                      onChange={this.handleOptionChange.bind(this)} />
                  Pharmacy
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" value="grocery"
                      checked={this.state.verticalSelectionValue === 'grocery'}
                      onChange={this.handleOptionChange.bind(this)} />
                  Grocery
              </label>
            </div>

          </form>
        );
    }
}

export default VerticalSelector;
