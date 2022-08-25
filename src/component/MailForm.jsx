import React from 'react';
import emailjs from '@emailjs/browser';

export const MailForm = () => {
    async function sendEmail (event) {
      event.preventDefault();
      const response = await emailjs.sendForm('service_alcqv9q','template_rm0u5gr',event.target,'XLR_TraY8ZEfCqtg9')
      console.log(response);
      alert("mensaje enviado!! muchas gracias");
      return response
    }

      return (
        <div className='form'>
          <h1 className='title'>Escribime</h1>
          <form className='form-mail' onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" name='user_name' />    
            <label>Email</label>
            <input type="email" name='user_email' />
            <label>Mensaje</label>
            <textarea name="user_message" id="" cols="30" rows="10"></textarea>
            <button>Enviar</button>
          </form>
        </div>
      )
    }

export default MailForm;