import React from 'react';
import emailjs from '@emailjs/browser';
import "../styles/styles/mailForm.scss"

export const MailForm = () => {
    async function sendEmail (event) {
      event.preventDefault();
      const response = await emailjs.sendForm('service_alcqv9q','template_rm0u5gr',event.target,'XLR_TraY8ZEfCqtg9')
      console.log(response);
      alert("mensaje enviado!! muchas gracias");
      return response
    }

      return (
        <form className='form-mail' onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name='user_name' />    
          <label>Email</label>
          <input type="email" name='user_email' />
          <label>Mensaje</label>
          <textarea name="user_message"></textarea>
          <button>Enviar</button>
        </form>
      )
    }

export default MailForm;