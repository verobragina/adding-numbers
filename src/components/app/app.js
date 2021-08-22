import React, { Component } from 'react';

import NumbersInput from '../numbers-input';
import Popup from '../popup';

import './app.css'

export default class App extends Component {

  state = {
    number1: 0,
    number2: 0,
    sums: [],
    popupActive: false
  }

  inputNumber = (name, value) => {
    this.setState(() => {
      return {
        [name]: value
      }
    })
  }

  setActive = () => {
    this.setState(() => {
      return {
        popupActive: false
      }
    })
  }

  calculateTotal = (e) => {
    e.preventDefault()

    this.setState(({ number1, number2, sums }) => {
      this.sum = number1 + number2
      const newMassive = [...sums, this.sum]
      return {
        number1: 0,
        number2: 0,
        sums: newMassive,
        popupActive: true
      }
    })
  }

  render = () => {
    const {
      number1,
      number2,
      sums,
      popupActive
    } = this.state

    return (
      <div className="container">
        <div className="massive">
          { sums.join(', ') }
        </div>

        <NumbersInput
          onNumberChange={ this.inputNumber }
          number1={ number1 }
          number2={ number2 }/>

        <button onClick={ this.calculateTotal } className="button">
          Выполнить
        </button>

        <Popup active={ popupActive } setActive={ this.setActive }>
          { this.sum }
        </Popup>
      </div>
    )
  }
}
