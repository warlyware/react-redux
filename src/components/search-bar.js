import React, { Component } from 'react';

export class SearchBar extends Component {

  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

}