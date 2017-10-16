import React, { Component } from 'react';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
        onChange={this.onInputChange} />
      </div>
    )
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

}