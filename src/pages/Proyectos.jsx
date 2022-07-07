import React, {useState} from "react";
import { proyectos } from "../assets/proyectos";
import FunkoLifeImg from '../assets/FunkoLife.png'
import ItalianUImg from '../assets/ItalianU.png'
import CriptoAppImg from '../assets/CriptoApp.png'
import BootcampSportImg from '../assets/BootcampSport.png'

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
                <img alt={proyecto.nombre} key={proyecto.nombre} src={imagenes[proyecto.nombre]} />
                <h3>{proyecto.nombre}</h3>
                <h3>{proyecto.descripcion}</h3>
                <a
                  href={`${proyecto.dir}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visita Mi Sitio
                </a>
                )
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
