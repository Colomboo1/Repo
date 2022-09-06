import React from "react";
import CV from '../media/CV.pdf';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>Sobre mi</h2>
      <p>
        Tengo 31 años soy tecnico superior en mecatronica en la UTN Cordoba y 
        perfeccione mis conocimientos al area de automacion industriales,
        en mi etapa como desarrollador realice cursos en Coder House y 
        profundice mis conocimientos de manera independiente.
      </p>
      <p>
        Tuve varios empleos en el área del mantenimiento industrial, 
        en el cual conocí gente y experiencias maravillosas, 
        pero encontré mi preferencia en la programación y
        me pareció el momento oportuno encaminar mi crecimiento profesional en el desarrollo de software.
      </p>
      <a className="button" href={CV} download>Si estas interesado poder descargar mi CV aqui</a>
    </div>
  );
}

export default AboutMe;