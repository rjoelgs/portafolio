import React, { useState, useEffect } from "react";
import { proyectos } from "../assets/proyectos";
import Modal from "react-modal";
import Aos from "aos";
import "aos/dist/aos.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "calc(100% - 35px)",
  },
};

Modal.setAppElement("#root");

const Proyectos = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const [modal, setModal] = useState(false);

  const [objModal, setObjModal] = useState({
    nombre: "",
    descripcion: "",
    dir: "",
  });



  const handleClick = (e) => {
    setObjModal({
      nombre: e.target.attributes.name.value,
      descripcion: e.target.attributes.description.value,
      dir: e.target.attributes.site.value,
      tools: e.target.attributes.tools.value,
    });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section id="proyectos">
      <h2 id="align">Proyectos</h2>

      <div className="proyectos">
        {proyectos.map((proyecto) => {
          return (
            <div
              data-aos="zoom-in-up"
              name={proyecto.nombre}
              description={proyecto.descripcion}
              site={proyecto.dir}
              tools={proyecto.herramientas}
              onClick={(e) => {
                handleClick(e);
              }}
              key={proyecto.id}
              className="proyecto"
              style={{
                backgroundImage: `url(${require(`../assets/${proyecto.nombre}.png`)}`,
              }}
            ></div>
          );
        })}
      </div>
      <div>
        <Modal
          isOpen={modal}
          style={customStyles}
          contentLabel="Example Modal"
          onRequestClose={closeModal}
          closeTimeoutMS={100}
          overlayClassName="modal-fondo"
        >
          <div className="modal">
            <h2>{objModal.nombre}</h2>
            <p>
              <span>proyecto: &nbsp;</span>
              {objModal.descripcion}
            </p>
            <p>
              <span>herramientas: &nbsp;</span>
              {objModal.tools}
            </p>
            <a href={objModal.dir} target="_blank" rel="noopener noreferrer">
              <button>ir al sitio</button>
            </a>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Proyectos;
