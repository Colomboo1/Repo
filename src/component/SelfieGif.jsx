import React,{useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import homeGif from "../media/animations/homeGif.gif"
import aboutGif from "../media/animations/aboutGif.gif"
import contactGif from "../media/animations/contactGif.gif"
import mocoGif from "../media/animations/mocoGif.gif"





const SelfieGif = () => {
    let location = useLocation();
    const [picture, setpicture] = useState(homeGif);

    const Image = (direction) =>{
        let image=homeGif;
        if (direction === "/contact") {
            image = contactGif;
            
        }else if (direction === "/about") {
            image = aboutGif;
            
        }else if (direction === "/project") {
            image = mocoGif;
        }
        
        setpicture(image);

        return;
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