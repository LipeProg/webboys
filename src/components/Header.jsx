import React from 'react'

export const Header = () => {
  return (
    <div className='jumbotron text-center'>
  <h1>Web Boys</h1> 
  <p>Os melhores serviços digitais</p> 
  <form>
    <div className='input-group'>
      <input type='email' className='form-control' size='50' placeholder='Email Address' required />
      <div className='input-group-btn'>
        <button type='button' className='btn btn-danger'>Subscribe</button>
      </div>
    </div>
  </form>
</div>
  )
}
