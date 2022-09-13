import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import '../styles/styles/Projects.scss';
import { slidesInfo } from '../component/SlidesInfo';

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