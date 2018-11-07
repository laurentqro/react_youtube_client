import React, { Component } from 'react';

class SearchBar extends React.Component {
  render() {
    return <input placeholder="Search a video" onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}


export default SearchBar;