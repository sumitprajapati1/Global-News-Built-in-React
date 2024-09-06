import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
        <img src={loader} alt="loader"/>
        </div>
      </div>
    )
  }
}

export default Spinner
