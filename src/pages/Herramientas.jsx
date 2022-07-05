import React from 'react'
import {herramientas} from '../assets/herramientas'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascriptImg from '../assets/javascript.png'
import git from '../assets/git.png'
import github from '../assets/github.jpeg'
import react from '../assets/react.jpg'
import mongo from '../assets/mongo.jpg'
import node from '../assets/node.jpg'
import bootstrap from '../assets/bootstrap.png'



const Herramientas = () => {
    const tools={
        html: html,
        css: css,
        javascript: javascriptImg,
        git: git,
        github: github,
        react: react,
        mongo: mongo,
        node: node,
        bootstrap: bootstrap        
    }


  return (
    <section id='herramientas'>
        <h2 id='align'>Herramientas</h2>
        <div>
            {herramientas.map((herramienta)=>  <img key={herramienta} className='tols' alt={herramienta} src={tools[herramienta]} />)}
        </div>
    </section>
  )
}

export default Herramientas
