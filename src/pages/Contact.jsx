import React from "react";  
import "../styles/styles/contact.scss"
import MailForm from "../component/MailForm";
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className="info">
        <h2>Te paso mi correo y mis datos asi me escribis </h2>
        <div className="icons">
          <a href="https://linkedin.com/in/andres-latorre-tottis" target="_blank" rel="noreferrer">
            <i className="icon-linkedin"><FaLinkedin size={25}/></i>
          </a>
          <a href="https://github.com/Colomboo1" target="_blank" rel="noreferrer">
            <i className="icon-github"><FaGithub size={25}/></i>
          </a>
          <a href="https://wa.me/+543513763357" target="_blank" rel="noreferrer">
            <i className="icon-whatsapp"><FaWhatsapp size={25} /></i>
          </a>
        </div>
      </div>
      <div className="form">
        <MailForm/>
      </div>
    </div>
  );
}

export default Contact;