import React, { Component } from 'react'

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  };

  render() {
    const { filter, countCountry, totalPopulation } = this.props;
    return (
      <div>
        <input type="text" value={filter} onChange={this.handleInputChange} />
        <span>Países: {countCountry} </span>
        <span>População: {formatNumber(totalPopulation)} </span>
      </div>
    )
  }
}
