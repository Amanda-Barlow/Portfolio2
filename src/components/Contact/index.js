import React, { useEffect, useState, useRef } from 'react';
import emailjs from  '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'template_cekkzso', e.target, '5JM5_hQii-VjdpfIb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message successfully sent!');
        window.location.reload(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send the message, please try again');
      });
  };

  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>
              <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 's']} idx={15} />
            </span>
          </h1>
          <h3>I am interested in finding the right Software Developer role.</h3>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Contact;
