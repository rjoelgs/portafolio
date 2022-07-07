import React from 'react'
import {herramientas} from '../assets/herramientas'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascriptImg from '../assets/javascript.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
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
        <div className='herramientas'>
            {herramientas.map((herramienta)=>{
              return <div className='divTool'>
                <img className='tols' src={tools[herramienta]} alt={herramienta} />
                <p>{herramienta}</p>
              </div>
            })}
        </div>
    </section>
  )
}

export default Herramientas
