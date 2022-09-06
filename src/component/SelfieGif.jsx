import React,{useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import homeGif from "../media/animations/homeGif.gif"
import aboutGif from "../media/animations/aboutGif.gif"
import contactGif from "../media/animations/contactGif.gif"
import mocoGif from "../media/animations/mocoGif.gif"

const SelfieGif = () => {
  let location = useLocation();
  const [picture, setpicture] = useState(homeGif);
  const Image = (direction) => {
    let image=homeGif;
    switch (direction) {
      default:
        image=homeGif;
        break;
      case "/contact":
        image = contactGif;
        break;
      case "/about":
        image = aboutGif;
        break;
      case "/projects":
        image = mocoGif;
      }
    
    setpicture(image);
  } 

  useEffect(() => {
    console.log("useEffect", location.pathname);
    Image(location.pathname) ;    
  }, [location]);
  
  return (  
    <img src={picture} alt="sonrisa" />
  );
};

export default SelfieGif;