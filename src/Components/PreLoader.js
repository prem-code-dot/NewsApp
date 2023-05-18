import React from 'react'
import loader from './Pendulum.gif'

const PreLoader = ()=>{ 
    return (
      <div className='text-center'>
        <img src={loader} alt="Preloader" />
      </div>
    )
}

export default PreLoader