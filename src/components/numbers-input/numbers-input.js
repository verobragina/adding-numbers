import React, { Component } from 'react';

import './numbers-input.css'

class NumbersInput extends Component {

  handleChange = (e) => {
    const { name, value } = e.target
    this.props.onNumberChange(name, +value)
  }

  render() {
    const { number1, number2 } = this.props

    return (
      <div className="numbers">
        <input
          className="number-first"
          name="number1"
          value={ number1 }
          onChange={ this.handleChange }/>
        <input
          className="number-second"
          name="number2"
          value={ number2 }
          onChange={ this.handleChange }/>
      </div>
    );
  }
}

export default NumbersInput;
