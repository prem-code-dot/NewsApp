import React, { Component } from 'react'
import loader from './Pendulum.gif'

export class PreLoader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="Preloader" />
      </div>
    )
  }
}

export default PreLoader