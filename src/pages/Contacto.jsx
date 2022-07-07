import React from "react";
import linkedinImg from "../assets/linkedin.svg";
import githubImg from "../assets/githubsvg.svg";
import instagramImg from "../assets/instagram.svg";
import whatsappImg from "../assets/whatsapp.svg";

const Contacto = () => {
  return (
    <>
      <section id="contacto">
        <h2 id="">Contacto</h2>

        <div>
          <a
            href="https://www.linkedin.com/in/joel-gonzalez-saavedra-b36856233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="linkedinImg" src={linkedinImg} />
          </a>

          <a
            href="https://github.com/rjoelgs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="githubImg" src={githubImg} />
          </a>

          <a
            href="https://www.instagram.com/ramiro.j.saavedra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="instagramImg" src={instagramImg} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=526181387485"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="instagramImg" src={whatsappImg} />
          </a>
        </div>
      </section>

      <div className="relleno"></div>
    </>
  );
};

export default Contacto;
