import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

function Contact(props){
    return (
        <section data-aos="flip-down" className='flex flex-col justify-center container mx-auto text-center mb-10' id="contact">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-[5%]'>
            <div className='flex flex-col gap-5'>
                    <h3 className='text-5xl'>Contato</h3>
                    <p className='text-xl'>Entre em contato comigo, seja por minhas redes sociais ou preenchendo o formulário!</p>
                    <ul className='text-lg'>
                        <li><a href="https://wa.me/5521981859528"><FontAwesomeIcon icon={faWhatsapp} /> (21) 98185-9528</a></li>
                        <li><a href="mailto:alessandroc.dev@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> alessandroc.dev@gmail.com</a></li>
                        <li><p><FontAwesomeIcon icon={faLocationDot} /> Santa Cruz - RJ</p></li>
                    </ul>
                    <p className='text-xl'>Minhas Redes Sociais</p>
                    <ul className='flex justify-center gap-5 text-3xl'>
                        <SocialMedia />
                    </ul>
                </div>
                <ContactForm isDark={props.isDark} />
            </div>

            
        
        </section>
    )
}

export default Contact;