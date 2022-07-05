import React from 'react';
import pdf from '../assets/curriculum.pdf'
import foto from '../assets/foto.png'



const Introduccion = () => {
  return (
    <section className='.section' id='introduccion'>
      <div className='introduccion'>
        <h2>Introducción</h2>
         <p>Soy un desarrollador Full Stack apasionado de las TI, me gusta trabajar en equipo y  estoy buscando un trabajo en desarrollo de tiempo completo para aplicar mis habilidades y  continuar desarrollando </p>
         
         <a href={pdf} target="_blank" rel="noopener noreferrer" download="RamiroCurriculum"> 
          <button>Curriculum Vitae</button>
          </a>
         
        </div>
         <div className='introduccion'>
            <img alt='foto' src={foto} />
        </div>
        <hr></hr>
    </section>
    
  )
}

export default Introduccion
