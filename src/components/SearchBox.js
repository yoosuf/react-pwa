import React, { Component } from 'react';

import axios from "axios";

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    }

    handleChnage(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    handleSearch(e)
    {

        e.preventDefault();

        axios.get('http://quicksilver.wip/api/v1/search?type=pharmaceutical', {
            params: {
                q: this.state.keyword
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="searchbox" id="search_box">

                <form method="GET" onSubmit={this.handleSearch.bind(this)}>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input"
                                type="text"
                                name="keyword"
                                value={this.state.keyword}
                                placeholder="Search"
                                onChange={this.handleChnage.bind(this)} />
                    </div>
                    <div className="control">
                        <button className="button is-info" type="submit">
                            Search
                        </button>
                    </div>
                </div>


                </form>
            </div>
        );
    }
}

export default SearchBox;
