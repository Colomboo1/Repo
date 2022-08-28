import React from "react";
import CV from '../media/CV.pdf';

const AboutMe = () => {
  return (
    <div>
      <h1>Acerca de mi</h1>
      <p>
        Tengo 31 años soy tecnico superior en mecatronica en la UTN Cordoba y perfeccione mis conocimientos al area de automacion industriales,
        en mi etapa como desarrollador realice cursos en Coder House y profundice mis conocimientos de manera independiente,
      </p>
      <p>
        Tuve varios empleos en el área del mantenimiento industrial, 
        en el cual conocí gente y experiencias maravillosas, 
        pero encontré mi preferencia en la programación y
        me pareció el momento oportuno encaminar mi crecimiento profesional en el desarrollo de software.
      </p>
      <button className="button-cv">
      <a href={CV} download>
        Si estas interesado poder descargar mi CV aqui
      </a>
    </button>
    </div>
  );
}

export default AboutMe;