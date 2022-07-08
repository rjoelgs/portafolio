import React from 'react'
import menu from '../assets/menu.svg'


const Nav = () => {

  return (
    <>
    <nav>
      <img id='menu' alt='menu' src={menu} />
      <ul>
        <a href='#introduccion'>Introducción</a>
        <a href= '#proyectos'>Proyectos</a>
        <a href='#herramientas'>Herramientas</a>
        <a href='#contacto'>Contacto</a>
      </ul>
    </nav>
    
    </>
  )
}

export default Nav
