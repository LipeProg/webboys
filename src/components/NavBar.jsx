import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-Site.png'; // Importando a imagem

export const NavBar = () => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>                        
          </button>
          <Link className='navbar-brand' to={'/'}>
            <img src={Logo} alt='Logo' style={{ height: '80px' }} /> {/* Removendo as chaves */}
          </Link>
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='nav navbar-nav navbar-right'>
            <li><Link to={'/'}>SOBRE</Link></li>
            <li><Link to={'/Services'}>SERVIÇOS</Link></li>
            <li><Link to={'/Contatos'}>CONTATOS</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


