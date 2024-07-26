import React from 'react';
import CardService from './CardService';

import { faGear, faGlobe, faScrewdriverWrench, faHeadset } from '@fortawesome/free-solid-svg-icons';

function Services(props){
    return (
        <section className='flex items-center container mx-auto flex-col gap-5' id="services">
            <h2 className='text-5xl'>Services</h2>
            <p className='text-center text-xl mb-5'>Confira o que eu posso fazer para você!</p>
            <div data-aos="flip-up" className='grid grid-cols-1 mx-[5%] lg:grid-cols-3 text-center gap-10 gap-y-14 mb-10'>
                <CardService icon={faHeadset} title="Suporte Técnico" paragraph="Ofereço o meu suporte técnico, onde eu estarei atendendo suas demandas para garantir que seu site funcione de forma eficiente e de acordo com o que você deseja." isDark={props.isDark} />
                <CardService icon={faGlobe} title="Criação de Sites" paragraph="Realizo a criação totalmente do zero de sites conforme as suas necessidades, com design agradável para o público e com identidade visual exclusiva." isDark={props.isDark} />
                <CardService icon={faScrewdriverWrench} title="Personalizações Exclusivas" paragraph="Caso já tenha seu site e ele não corresponde ao que você deseja. Faço personalizações exclusivas para atender o que você quer transmitir para os seus clientes." isDark={props.isDark} />
            </div>
        </section>
    )
}

export default Services;