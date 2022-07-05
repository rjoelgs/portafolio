import React from 'react'
import {proyectos} from '../assets/proyectos'








const Proyectos = () => {
 
  const handleClick =({target})=>{
    
  }
 

  return (
    <section id='proyectos'>
      <h2 id='align'>Proyectos</h2>

        <div className='proyectos'>
         {proyectos.map((proyecto)=>{
         return <div onClick={(e)=>{handleClick(e)}} key={proyecto.id} className='proyecto' style={{ backgroundImage: `url(${require(`../assets/${proyecto.nombre}.png`)})`}}>
            <h3 style={{position:'relative'}}>{proyecto.nombre}</h3>
            <h3>{proyecto.descripcion}</h3>
            {proyecto.dir &&<a href={`${proyecto.dir}`} target="_blank" rel="noopener noreferrer">Visita Mi Sitio</a>}
        </div>})}
        </div>
    
        
    </section>
  )
}

export default Proyectos
