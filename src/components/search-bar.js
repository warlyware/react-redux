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
      <div>
        <input onChange={this.onInputChange} />
        {this.state.term}
      </div>
    )
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

}