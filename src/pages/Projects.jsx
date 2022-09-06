import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import '../styles/styles/Projects.scss';

const slidesInfo = [
  {
    src:"https://i.ibb.co/ZNjmnZ2/pergoliana.jpg",
    alt:"Proyecto\"La Pergoliana\"",
    desc:"https://andres-latorre-la-pergoliana.vercel.app/"
  },
  {
    src:"https://i.ibb.co/sHx0bw0/stahl-prato.jpg",
    alt:"Proyecto\" Stahl & Prato\"",
    desc:"https://stahl-prato.vercel.app/"
  },
  {
    src:"https://i.ibb.co/0Jd6ccQ/comercial-web.jpg",
    alt:"Proyecto \"Comercial web\"",
    desc:"https://comercial-web.vercel.app"
  },
];


const Projects= () => {
  return (
    <div className="projects">
      <h2>Algunos de mis proyectos...</h2>
      <Carousel plugins={['arrows','infinite',]}>
        {slidesInfo.map(el => (
          <div className="slider-container">
            <img src={el.src} alt={el.alt}/>
            <a href={el.desc} className='button' target="_blank" rel="noreferrer">ver</a>
          </div>
        ))}
      </Carousel>  
    </div>
  );
}
    
export default Projects;