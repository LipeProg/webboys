import React from 'react'

export const About = () => {
  return (
    <>
    <div id='about' className='container-fluid'>
  <div className='row'>
    <div className='col-sm-8'>
      <h2>About Company Page</h2><br />
      
      <h4>Web Boys</h4><br />
      <p>Visando preencher uma lacuna no setor de propaganda digital em Recife, em 2023 nasceu a Webboys. 
        Localizada no centro do Recife / PE, estamos aptos a suprir todas suas necessidades de comunicação</p>
      <br />
      
      <button className='btn btn-default btn-lg'>Entre em Contato</button>
    </div>

    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-signal logo'></span>
    </div>
  </div>
</div>

<div className='container-fluid bg-grey'>
  <div className='row'>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-globe logo '></span>
    </div>
    <div className='col-sm-8'>
      <h2>Our Values</h2><br />
      <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
      <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>
    </>
  )
}
