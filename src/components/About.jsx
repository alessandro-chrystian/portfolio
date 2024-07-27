import React from 'react';
import StackKnowledge from './StackKnowledge';
import myPhoto from '../assets/images/my-photo.png'

function About() {
    return (
        <section data-aos="flip-left" id="about">
            <div className='flex items-center flex-col lg:flex-row justify-around container mx-auto my-10'>
                <img src={myPhoto} alt="Alessandro Chrystian" className={`rounded-full  shadow-[2px_3px_2px_0px]`} />
                <div className='flex flex-col gap-5 mt-5 p-5 rounded-xl justify-center lg:w-[50%]'>
                    <p className='text-lg text-justify'>
                        Olá! Me chamo Alessandro, sou apaixonado pela área de programação desde o dia em que comecei a me interessar sobre. Desde então, venho aprimorando minhas habilidades com o intuito de me tornar um programador cada vez mais confiante e diferenciado!
                    </p>
                    <div className='text-end'><a href="#contact" className='bg-primary-dark p-3 rounded-lg text-border font-bold'>Fale comigo!</a>
                    </div>
                    <StackKnowledge />
                </div>
            </div>
        </section>
    )
}

export default About;