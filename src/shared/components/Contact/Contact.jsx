import React from "react";
import "./Contact.scss";
// import github from "../../../assets/icons/github.svg";
// import linkedin from "../../../assets/icons/linkedin.svg";

export default function Contact() {
  return (
    <div className="contact">
      <h3>Contacta conmigo</h3>

      <a href="https://github.com/samikhalaf">
        {/* <img src={github} alt="github" className="github-image" /> */}
        <p className="link">→ Chafardea mi código en Github</p>
      </a>

      <a href="https://www.linkedin.com/in/samikhalaf/">
        {/* <img src={linkedin} alt="linkedin" className="linkedin-image" /> */}
        <p className="link">→ Conecta conmigo en Linked In</p>
      </a>
      <a href="https://github.com/samikhalaf/samikhalaf/blob/main/sami-khalaf-cv3.pdf">
        {/* <img src={linkedin} alt="linkedin" className="linkedin-image" /> */}
        <p className="link">→ Descarga mi CV</p>
      </a>

      <br />

      <div className="raspberry">
        <p className="raspberry-center">Sobre esta web:</p>
        <p>
          Esta web está hosteada en mi propio servidor casero: mi querida
          Raspberry Pi 4 4GB. Para hacerla accesible desde cualquier parte del
          mundo, tiene un contenedor docker corriendo Nginx, al que redirijo
          todas las peticiones que llegan a mi IP dinámica de casa. Como
          servidor DNS dinámico uso el de DonDominio, DonDNS.
        </p>
        <p className="raspberry-center">
          Me estoy currando una documentación chula de esto, coming soon! 🚀
        </p>
      </div>
    </div>
  );
}
