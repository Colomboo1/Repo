import React from "react";  
import MailForm from "../component/MailForm";

const Contact = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <div className="info">
        <h3>te paso mi correo asi  me escribis y mis datos ya que estamos</h3>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="form">
      <MailForm/>
      </div>
    </div>
  );
}

export default Contact;