import React, {useState} from "react";
import { proyectos } from "../assets/proyectos";
import FunkoLifeImg from '../assets/FunkoLife.png'
import ItalianUImg from '../assets/ItalianU.png'
import CriptoAppImg from '../assets/CriptoApp.png'
import BootcampSportImg from '../assets/BootcampSport.png'
import cerrarBtn from '../assets/cerrar.svg'

const Proyectos = () => {
  const [modal, setModal]= useState(false)

  const imagenes = {
    FunkoLife: FunkoLifeImg,
    ItalianU: ItalianUImg,
    CriptoApp: CriptoAppImg,
    BootcampSport: BootcampSportImg

}

  const handleClick = ({ target }) => {
    if (modal === true){return}

    target.setAttribute("id", "mostrar");
    target.style.backgroundImage = "none";
    target.firstChild.style.display = "block";
    setModal(true)
  };

  const handleCerrar =()=>{
    window.location.reload();
  }

  return (
    <section id="proyectos">
      <h2 id="align">Proyectos</h2>

      <div className="proyectos">
        {proyectos.map((proyecto) => {
          return (
            <div
              onClick={(e) => {
                handleClick(e);
              }}
              key={proyecto.id}
              className="proyecto"
              style={{
                backgroundImage: `url(${require(`../assets/${proyecto.nombre}.png`)})`,
              }}
            >
              <div className="hiden" style={{ display: "none" }}>
                <div className="marco">
                <img alt={proyecto.nombre} key={proyecto.nombre} src={imagenes[proyecto.nombre]} />
                <h3><span>{proyecto.nombre}</span></h3>
                <h3><span>Descripción:{' '}</span>{proyecto.descripcion}</h3>
                <h3><span>Herramientas: {' '}</span>{proyecto.herramientas}</h3>
                <a
                  href={`${proyecto.dir}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visita Mi Sitio
                </a>
                <img onClick={handleCerrar} id="cerrar" alt="cerrar boton" src={cerrarBtn} />

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
